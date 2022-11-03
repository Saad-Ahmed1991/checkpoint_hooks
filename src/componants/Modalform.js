import { useState } from "react";
import Form from "react-bootstrap/Form";

function Modalform({ getmovie }) {
  const [movie, setMovie] = useState({
    id: 0,
    title: "",
    Description: "",
    posterUrl: "",
    rating: 0,
    trailerSrc: "",
  });
  return (
    <Form>
      <Form.Group className="rating_input">
        <Form.Label>ID:</Form.Label>
        <Form.Control
          type="text"
          placeholder="ID"
          onChange={(e) => setMovie({ ...movie, id: e.target.value })}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Movie Title:</Form.Label>
        <Form.Control
          type="text"
          placeholder="Movie Title"
          value={movie.title}
          onChange={(e) => setMovie({ ...movie, title: e.target.value })}
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Description:</Form.Label>
        <Form.Control
          type="text"
          placeholder="Description"
          value={movie.Description}
          onChange={(e) => setMovie({ ...movie, Description: e.target.value })}
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Thumbnail link:</Form.Label>
        <Form.Control
          type="text"
          placeholder="Thumbnail link"
          value={movie.posterUrl}
          onChange={(e) => setMovie({ ...movie, posterUrl: e.target.value })}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Trailer link:</Form.Label>
        <Form.Control
          type="text"
          placeholder="Trailer link"
          value={movie.trailerSrc}
          onChange={(e) => setMovie({ ...movie, trailerSrc: e.target.value })}
        />
      </Form.Group>
      <Form.Group className="rating_input">
        <Form.Label>Rating:</Form.Label>
        <Form.Select
          value={movie.rating}
          onChange={(e) => setMovie({ ...movie, rating: e.target.value })}
        >
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </Form.Select>
      </Form.Group>
    </Form>
  );
}

export default Modalform;
