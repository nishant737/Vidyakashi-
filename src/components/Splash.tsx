import Image from "next/image";

// Pure-CSS splash: shows the logo, then fades away (see .splash in globals.css).
// It lives in the root layout, so it only plays on a full page load.
export default function Splash() {
  return (
    <div className="splash" aria-hidden="true">
      <div className="splash-glow" />
      <div className="splash-content">
        <Image
          src="/logo.png"
          alt=""
          width={421}
          height={283}
          priority
          className="splash-logo h-28 w-auto sm:h-36"
        />
        <div className="splash-bar">
          <span />
        </div>
      </div>
    </div>
  );
}
