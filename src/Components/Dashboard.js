import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Button,
  FormControl,
  Grid,
  InputLabel,
  LinearProgress,
  MenuItem,
  Select,
  TextField,
} from "@material-ui/core";
import axios from "axios";
import NewsCard from "./NewsCard";
const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const AddNewClass = () => {
  const [formData, setFormdata] = useState({
    newsHeadline: "",
    authorName: "",
    imgURL: "",
    description: "",
    catagory: "",
    timeStamp: "just now",
  });
  const classes = useStyles();
  const [age, setAge] = React.useState('');

  const handleChange = (e) => {
    if (e.target.name === "title") {
      formData.newsHeadline = e.target.value;
    }
    if (e.target.name === "authorName") {
      formData.authorName = e.target.value;
    }
    if (e.target.name === "description") {
      formData.description = e.target.value;
    }
    if (e.target.name === "imgURL") {
      formData.imgURL = e.target.value;
    }
    if (e.target.name === "catagory") {
      formData.catagory = e.target.value;
    }
    setAge(e.target.value);
    setPreview(true);
  };

  const [preview, setPreview] = useState(false);
  const [imgLoad, setImgLoad] = useState(false);
  const handleImgUpload = (event) => {
    const imgData = new FormData();
    imgData.set("key", "c52ef286d44538b5e35cd23b4743904e");
    imgData.append("image", event.target.files[0]);
    setImgLoad(true);
    axios
      .post("https://api.imgbb.com/1/upload", imgData)
      .then((res) => {
        formData.imgURL = res.data.data.display_url;
        setImgLoad(false);
        setPreview(true);
        imgLoadPlaceHolder = "Image Uploading Done";
      })
      .catch((err) => {
        setImgLoad(false);
        setPreview(false);
      });
  };
  let imgLoadPlaceHolder = "Upload An Image";
  const handleSubmit = (e) => {
    formData.timeStamp = Date.now()
      setImgLoad(true);
      axios.post("http://localhost:5001/addNews", formData).then(() => {
        setImgLoad(false);
        document.getElementById("myForm").reset();
        alert("Successfully Added!");
        setFormdata({});
        setPreview(false);
      });
    e.preventDefault();
  };
  return (
    <div
      style={{
        marginTop: "20px",
        width: "99%",
        backgroundColor: "#eff2f5",
        padding: "100px 10px",
        marginLeft: '0.5%',
        borderRadius: '20px'
      }}
    >
      <form id="myForm">
        <Grid container spacing={3}>
          <Grid item xs={12} sm={12}>
            <TextField
              required
              multiline
              variant="outlined"
              name="title"
              label="News Headline"
              fullWidth
              onChange={handleChange}
              autoFocus
            />
          </Grid>
          <Grid item xs={12} sm={12}>
            <TextField
              required
              variant="outlined"
              name="authorName"
              label="Author Name"
              fullWidth
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={12}>
            <TextField
              multiline
              required
              variant="outlined"
              name="description"
              label="News Description"
              fullWidth
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={12}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
              }}
            >
              <FormControl className={classes.formControl}>
                <InputLabel id="demo-simple-select-label">Catagory</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  // value={age}
                  name="catagory"
                  onChange={handleChange}
                >
                  <MenuItem value="topNews">TOP News</MenuItem>
                  <MenuItem value="Entertainment">Entertainment</MenuItem>
                  <MenuItem value="Sports">Sports</MenuItem>
                  <MenuItem value="Music">Music</MenuItem>
                  <MenuItem value="International">International</MenuItem>
                  <MenuItem value="Politics">Politics</MenuItem>
                  <MenuItem value="Nature">Nature</MenuItem>
                  <MenuItem value="Technology">Technology</MenuItem>
                  <MenuItem value="Science">Science</MenuItem>
                  <MenuItem value="Health">Health</MenuItem>
                  <MenuItem value="Religion">Religion</MenuItem>
                  <MenuItem value="Social">Social</MenuItem>
                </Select>
              </FormControl>
              <Button variant="contained" component="label">
                {imgLoadPlaceHolder}
                <input type="file" hidden onChange={handleImgUpload} />
              </Button>
            </div>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={12}>
          <TextField
            variant="outlined"
            name="imgURL"
            label="Paste image URL or Upload"
            fullWidth
            onChange={handleChange}
          />
        </Grid>
        {preview && (
          <Grid item xs={12} sm={12} md={12}>
            <p style={{fontSize: '20px'}}>Preview:</p>
            <div>
              <NewsCard data={formData} summited={false}></NewsCard>
            </div>
          </Grid>
        )}
        {imgLoad && <LinearProgress color="secondary" />}
        <Button
          style={{ marginTop: "25px", marginBottom: "50px", width: '50%', marginLeft: '25%' }}
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          onClick={handleSubmit}
          disabled={!(formData.authorName && formData.newsHeadline && formData.description && formData.imgURL && formData.catagory)}
        >
          Submit
        </Button>
      </form>
    </div>
  );
};

export default AddNewClass;
