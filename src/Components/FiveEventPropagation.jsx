export default function FiveEventPropagation() {
  const handleGrandParent = () => {
    console.log("Grand Clicked");
  };

  const handleParentClick = () => {
    console.log("Parent Clicked");
  };

  const handleChildClick = (event) => {
    console.log(event);
    event.stopPropagation();
    console.log("Child Clicked");
  };

  return (
    // <section className="main-div btn">
    //   <div className="g-div" onClick={handleGrandParent}>
    //     <div className="p-div" onClick={handleParentClick}>
    //       <button className="c-div" onClick={handleChildClick}>
    //         Child Div
    //       </button>
    //     </div>
    //   </div>
    // </section>

    // Stop Propagation
    <section className="main-div btn">
      <div className="g-div" onClickCapture={handleGrandParent}>
        <div className="p-div" onClickCapture={handleParentClick}>
          <button className="c-div" onClickCapture={handleChildClick}>
            Child Div
          </button>
        </div>
      </div>
    </section>
  );
}
