import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <div>
        <div className="text-gray-400 flex justify-center items-center h-20 mx-auto max-w-[800px] text-sm ">
          © Powered by.
          <Link to="https://github.com/loeybho" target="_blank">
            &nbsp; <span className="font-semibold underline">오별</span>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Footer;
