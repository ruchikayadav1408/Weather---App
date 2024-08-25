import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import "./infobox.css";
export default function Infobox({ info }) {
  const INIT_URL =
    "https://media.istockphoto.com/id/1126605456/photo/delhi-air-pollution.jpg?s=612x612&w=0&k=20&c=YhensS8xOMsWao6CwIEkRcmjVpJbDThMd4C1-zFrqWo=";

  let HOT_URL ="https://p.potaufeu.asahi.com/1bd9-p/picture/27757096/17b7de3930b44dbea55b5cff0b6a6a1d.jpg";
  let COLD_URL =
    "https://www.tbsnews.net/sites/default/files/styles/amp_metadata_content_image_min_696px_wide/public/images/2021/01/22/cold_winter2.png";
  let RAIN_URL =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzQW14DuevsJuL_niAPEz6BRaCremGjjbHLcV40n0UvkNRDgUMPs5rb-yhxB_OcypSUsU&usqp=CAU";
  return (
    <div className="Infobox">
      <div className="cardcontainer">
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            alt="green iguana"
            height="140"
            image={
              info.humidity > 80
                ? RAIN_URL
                : info.temp > 15
                ? HOT_URL
                : COLD_URL
            }
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {info.city}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <p> Temperature = {info.temp}&deg;C</p>
              <p>Humidity = {info.humidity}</p>
              <p>Min Temp = {info.tempmin}&deg;C</p>
              <p>Max Temp = {info.tempmax}&deg;C</p>
              <p>
                The Weather can be described as <i>{info.weather}</i> and feels
                like = {info.feelslIke}&deg;C
              </p>
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
