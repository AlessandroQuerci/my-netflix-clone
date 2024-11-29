import facebook from "../assets/svg/facebook.svg";
import instagram from "../assets/svg/instagram-old.svg";
import twitter from "../assets/svg/twitterx.svg";
import youtube from "../assets/svg/youtube.svg";

const MyFooter = () => {
  return (
    <>
      <footer class="pt-5 pb-2 px-5 MyFooter">
        <div class="footerContainer px-6">
          <div class="socialIcon mb-3">
            <a target="_blank" className="me-3" href="https://www.facebook.com/netflix">
              <img src={facebook} alt="" />
            </a>
            <a target="_blank" className="me-3" href="https://www.instagram.com/netflix/">
              <img src={instagram} alt="" />
            </a>
            <a target="_blank" className="me-3" href="https://x.com/netflix">
              <img src={twitter} alt="" />
            </a>
            <a target="_blank" className="me-3" href="https://www.youtube.com/channel/UCWOA1ZGywLbqmigxE4Qlvuw">
              <img src={youtube} alt="" />
            </a>
          </div>
          <div class="container">
            <div class="row">
              <div class="col-lg-3 px-0">
                <p class="fs-7 fw-light text-white opacity-50">Audio and Subtitles</p>
                <p class="fs-7 fw-light text-white opacity-50">Media Center</p>
                <p class="fs-7 fw-light text-white opacity-50">Privacy</p>
                <p class="fs-7 fw-light text-white opacity-50">Contact Us</p>
                <button class="btn rounded-0 border border-2-white fs-7 text-white opacity-50 px-2 py-1 mb-4">Service Code</button>
                <p class="fs-8 fw-light text-white opacity-50">© 1997-2019 Netflix, Inc. i-0d00fcda2fdf9c0de</p>
              </div>
              <div class="col-lg-3 px-0">
                <p class="fs-7 fw-light text-white opacity-50">Audio Desciption</p>
                <p class="fs-7 fw-light text-white opacity-50">Investor Relations</p>
                <p class="fs-7 fw-light text-white opacity-50">Legal Notices</p>
              </div>
              <div class="col-lg-3 px-0">
                <p class="fs-7 fw-light text-white opacity-50">Help Center</p>
                <p class="fs-7 fw-light text-white opacity-50">Jobs</p>
                <p class="fs-7 fw-light text-white opacity-50">Cookie Preferences</p>
              </div>
              <div class="col-lg-3 px-0">
                <p class="fs-7 fw-light text-white opacity-50">Gift Cards</p>
                <p class="fs-7 fw-light text-white opacity-50">Terms of Use</p>
                <p class="fs-7 fw-light text-white opacity-50">Corporate Information</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
export default MyFooter;
