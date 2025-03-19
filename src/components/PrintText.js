import { useReactToPrint } from "react-to-print";
import { useRef } from "react";
import { jsPDF } from "jspdf";

const PrintText = () => {
  const contentRef = useRef(null);
  const reactToPrintFn = useReactToPrint({ contentRef });

  const handleDownloadPDF = () => {
    const content = contentRef.current;

    const doc = new jsPDF();

    const text = content.innerText;

    doc.text(text, 10, 10);

    doc.save("hello-world.pdf");
  };

  return (
    <div className="app-container">
      <div className="printable-content" ref={contentRef}>
        <h1>Hello, World!</h1>
        <p>This is a printable and downloadable content.</p>
      </div>

      <div className="button-container">
        <button className="print-button" onClick={() => reactToPrintFn()}>
          Print Document
        </button>
        <button className="download-button" onClick={handleDownloadPDF}>
          Download PDF
        </button>
      </div>
    </div>
  );
};

export default PrintText;
