import { Container } from "react-bootstrap";
import { Dropdown } from "react-bootstrap";
import { RxTextAlignLeft } from "react-icons/rx";
import { HiViewGrid } from "react-icons/hi";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";

const MyActionBar = () => {
  return (
    <>
      <Container fluid className="d-flex justify-content-between py-3 px-5 MyActionBar">
        <div className="d-flex justify-content-between align-items-center" id="tv-genres">
          <h1 className="text-white fs-2 m-0 fw-bold me-4">TV Shows</h1>
          <Dropdown data-bs-theme="dark" className="border border-white">
            <Dropdown.Toggle
              id="dropdown-button-dark-example1"
              variant="black"
              className="d-flex px-1 py-0  justify-content-between align-items-center rounded-0 bg-black "
              title=""
            >
              <p className="m-0 me-4 ">Genres</p>
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>

              <Dropdown.Item href="#/">Anime</Dropdown.Item>
              <Dropdown.Item href="#/">British</Dropdown.Item>
              <Dropdown.Item href="#/">Comedies</Dropdown.Item>
              <Dropdown.Item href="#/">Crime</Dropdown.Item>
              <Dropdown.Item href="#/">Docuseries</Dropdown.Item>
              <Dropdown.Item href="#/">Dramas</Dropdown.Item>
              <Dropdown.Item href="#/">European</Dropdown.Item>
              <Dropdown.Item href="#/">Holidays</Dropdown.Item>
              <Dropdown.Item href="#/">Horror</Dropdown.Item>
              <Dropdown.Item href="#/">International</Dropdown.Item>
              <Dropdown.Item href="#/">Italian</Dropdown.Item>
              <Dropdown.Item href="#/">Kids</Dropdown.Item>
              <Dropdown.Item href="#/">Mysteries</Dropdown.Item>
              <Dropdown.Item href="#/">Reality & Talk</Dropdown.Item>
              <Dropdown.Item href="#/">Romance</Dropdown.Item>
              <Dropdown.Item href="#/">Sci-Fi & Fantasy</Dropdown.Item>
              <Dropdown.Item href="#/">Science & Nature</Dropdown.Item>
              <Dropdown.Item href="#/">Sports</Dropdown.Item>
              <Dropdown.Item href="#/">Teen</Dropdown.Item>
              <Dropdown.Item href="#/">Thriller</Dropdown.Item>
              <Dropdown.Item href="#/">US</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <ButtonGroup aria-label="Basic example">
          <Button variant="transparent" className="border border-secondary rounded-0 p-0 ">
            <RxTextAlignLeft className="text-secondary mx-3" />
          </Button>
          <Button variant="transparent" className="border border-secondary rounded-0 p-0 ">
            <HiViewGrid className="text-secondary mx-3" />
          </Button>
        </ButtonGroup>
      </Container>
    </>
  );
};
export default MyActionBar;
