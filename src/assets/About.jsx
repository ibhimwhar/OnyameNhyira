import './About.css'

function About () {
    const ListItems = [
        'All Traditional African wears',
        'Wedding Clothes',
        'Funeral Clothes',
        'Any Kaba style of your choice',
        'Any straight dress style',
    ]
    return (
        <div className='compoundDisplay'>
            <h2>We Specialize in:</h2>
            <ul>
                {ListItems.map((list) => (
                    <li>{list}</li>
                ))}
            </ul>
        </div>
    )
}


export default About