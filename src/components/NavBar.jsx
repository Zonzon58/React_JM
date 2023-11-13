const Navbar = ({next, precedent}) => {
    return (
        <div>
            <button onClick={next} >Next</button>
            <button onClick={precedent}>Precedent</button>
        </div>
    );
};


export default Navbar;