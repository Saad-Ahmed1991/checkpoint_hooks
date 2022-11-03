import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

function Modal1({ AddMovie, data }) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [movie, setMovie] = useState({
    id: 0,
    title: "",
    description: "",
    posterUrl: "",
    rating: 0,
    trailerSrc: "",
  });
  const resetMovieState = () => {
    setMovie({
      id: 0,
      title: "",
      description: "",
      posterUrl: "",
      rating: 0,
      trailerSrc: "",
    });
  };

  return (
    <>
      <Button
        className="btn_add_new_movie"
        variant="secondary"
        onClick={handleShow}
      >
        Add a new movie
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add a new movie</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="modal-form">
            <Form>
              <Form.Group className="rating_input">
                <Form.Label>ID</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="ID"
                  value={data.length + 1}
                  disabled={true}
                />
              </Form.Group>

              <Form.Group>
                <Form.Label>Movie Title:</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Movie Title"
                  value={movie.title}
                  onChange={(e) =>
                    setMovie({ ...movie, title: e.target.value })
                  }
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>description:</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Description"
                  value={movie.description}
                  onChange={(e) =>
                    setMovie({ ...movie, description: e.target.value })
                  }
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Thumbnail link:</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Thumbnail link"
                  value={movie.posterUrl}
                  onChange={(e) =>
                    setMovie({ ...movie, posterUrl: e.target.value })
                  }
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Trailer link:</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Trailer link"
                  value={movie.trailerSrc}
                  onChange={(e) =>
                    setMovie({ ...movie, trailerSrc: e.target.value })
                  }
                />
              </Form.Group>
              <Form.Group className="rating_input">
                <Form.Label>Rating:</Form.Label>
                <Form.Select
                  value={movie.rating}
                  onChange={(e) =>
                    setMovie({ ...movie, rating: e.target.value })
                  }
                >
                  <option>0</option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </Form.Select>
              </Form.Group>
            </Form>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            onClick={() => {
              AddMovie(movie);
              setMovie({ ...movie, id: data.length + 1 });
              resetMovieState();
            }}
            variant="primary"
          >
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Modal1;
