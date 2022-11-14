import icon1 from '../images/icon1.png'
import icon2 from '../images/icon2.png'
import icon3 from '../images/icon3.png'
import icon4 from '../images/icon4.png'

function Comp() {
    return (
        <div className='images'>
            <img src={icon1} />
            <h2>Declarative</h2>
            <p>React makes it painless to create interactive UIs.</p>
            <img src={icon2} />
            <h2>Components</h2>
            <p>build encapsulated Components that manage their state.</p>
            <img src={icon3} />
            <h2>Single-way</h2>
            <p>A set a immutable values are passed to the components</p>
            <img src={icon4} />
            <h2>JSX</h2>
            <p>Statically typed. designed to run on modern browser.</p>
            </div>
    );
}
export default Comp;