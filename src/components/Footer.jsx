import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <div className="border-b-[1px] border-solid border-neutral-100 bg-white/75 ">
        <div className="flex justify-center mx-auto max-w-[800px] px-4 py-6 text-sm">
          © Powered by.
          <Link
            to="https://github.com/loeybho"
            target="_blank"
            className="font-semibold"
          >
            &nbsp; 오별
          </Link>
        </div>
      </div>
    </>
  );
}

export default Footer;
