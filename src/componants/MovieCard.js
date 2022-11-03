import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import { Rating } from "react-simple-star-rating";

function MovieCard(props) {
  return (
    <Card className="card" style={{ width: "18rem" }}>
      <Card.Img className="cardimg" variant="top" src={props.el.posterUrl} />
      <Card.Body className="cardbody">
        <Card.Title>{props.el.title}</Card.Title>
        <Card.Text>{props.el.description}</Card.Text>
        <div className="rating">
          <Rating initialValue={props.el.rating} readonly={true} />
        </div>

        <Button
          className="btn_trailer"
          onClick={() => {
            window.open(props.el.trailerSrc, "_blank");
          }}
          variant="secondary"
        >
          Watch trailer
        </Button>
      </Card.Body>
    </Card>
  );
}

export default MovieCard;
