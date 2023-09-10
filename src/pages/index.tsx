import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function MainPage() {
  return (
    <>
      {/*main*/}
      <div className="main">
        <div className="inner-content">
          <h2>MAIN SECTION</h2>
        </div>
      </div>

      {/*section-select-index*/}
      <div className="select-section"></div>
    </>
  );
}
