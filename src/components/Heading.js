import "./heading.css";

const Heading = () => {
    return <div id="heading">
        {/* heading at the top */}
        <h1 className="text-center mt-5">
            Employees and Tasks
            <br></br>
            Relational Database
        </h1>
        <div id="spacing"></div>
        <h6>Arifur Rahman, Fatin Iftekhar, & Irteza Ali</h6>
        <div id="spacing"></div>

        <hr id="heading-line"></hr>
    </div>;
};

export default Heading;