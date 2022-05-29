import { Uploader } from "uploader";
import { UploadButton } from "react-uploader";
import "./fileupload.css";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";
import axios from "axios";

export default function Uploadfile() {
  const navigate = useNavigate();

  const description = useRef();

  const handleAddPost = async (e) => {
    e.preventDefault();
    const body = {
      description: description.current.value,
      picture: "https://res.cloudinary.com/caretopia/image/upload/v1653762990/caretopia/NGOPosts/Education_Post_Ajyalouna_kxnt0h.jpg",
    };
    try {
      await axios
        .post("http://localhost:3003/api/ngo/profilescreen/addPost", body, {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMGQxYmE0ZTgxMDQyMDU1ZDAxNDVmNSIsImlhdCI6MTY1Mzc0NDM3N30.sXlytBA3b11haSu1g2OfStITWOP5RLwigBIiLao7r3U",
          },
        },)
        .then((response) => {
          alert("post created successfully");
        });
    } catch (e) {
      if (e.response && e.response.data) {
        alert(e.response.data.message);
      }
    }
  };

  // const [modal, setModal] = useState(false);

  // const toggleModal = () => {
  //   setModal(!modal);
  // };

  const uploader = new Uploader({
    // Get production API keys from Upload.io
    apiKey: "free",
  });

  // if(modal) {
  //   document.body.classList.add('active-modal')
  // } else {
  //   document.body.classList.remove('active-modal')
  // }

  return (
    <>
      {/* <button onClick={toggleModal} className="btn-modal">
        Open
      </button> */}

      {/* {modal && ( */}
      <div className="modal_U">
        <div className="overlay_u"></div>
        <div className="modal-content_u">
          <h2>Create a post</h2>
          <p>
            <div className="App_u">
              <UploadButton
                uploader={uploader}
                options={{ multi: false }}
                onComplete={() => window.alert("Image uploaded successfully")}
              >
                {({ onClick }) => (
                  <div className="button1_u">
                    <button onClick={onClick}>Upload an image...</button>
                  </div>
                )}
              </UploadButton>
              <div className="post_u">
                <label>Write your caption here</label>
              </div>
              <div className="inputtext_u">
                <textarea className="textarea_u" required ref={description} placeholder="write here..."></textarea>
              </div>
              <div className="button2_u">
                <button onClick={handleAddPost}>share</button>
              </div>
            </div>
          </p>
          <div className="button3_u">
            <h3 onClick={() => navigate(-1)}>Close</h3>
          </div>
        </div>
      </div>
    </>
  );
}
