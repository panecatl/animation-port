import AnimatedLetters from '../AnimatedLetters';
import './index.scss';

const About = () => {
    
    return (
        <div className='contianer about-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters
                    strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
                    idx={15}
                    />
                </h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc nisi lorem, condimentum a nunc at, scelerisque dignissim odio.
                    Maecenas eget eros ac velit venenatis tincidunt. Nunc ullamcorper accumsan varius. </p>
                <p>Sed leo eros, dapibus sed bibendum non, scelerisque nec purus. Phasellus suscipit justo tortor, eu mattis tellus tempus congue. </p>
                <p>Curabitur in enim arcu.</p>
            </div>
        </div>
    )
}

export default About;