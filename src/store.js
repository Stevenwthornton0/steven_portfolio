import ServicePRO from './Images/servicepro_homepage.png';
import Brewbook from './Images/Brewbook_Homepage_Desktop.png';
import Marvel from './Images/Marvel.png';
import Quiz from './Images/Quiz.png';

const projects = [
    {
        id: 1,
        name: 'ServicePRO App',
        screenshot: ServicePRO,
        about: "A fully-responsive full-stack web application with authentication that bridges the connection between local service providers and their customers. Users are able to register, search for, and review various businesses both local and national.",
        live: 'https://service-pro-client.vercel.app/',
        client: 'https://github.com/Stevenwthornton0/servicepro_client',
        server: 'https://github.com/Stevenwthornton0/servicepro_server',
        jQuery: false,
        react: true,
        node: true
    },

    {
        id: 2,
        name: 'Brewbook App',
        screenshot: Brewbook,
        about: "A fully-responsive full-stack web application with authentication that allows a registered user to search for breweries based on their location: city and state. Users are encouraged to leave reviews of the breweries they've visited for others to read.",
        live: 'https://brewbook-82f41g4h9-stevenwthornton0.vercel.app/',
        client: 'https://github.com/Stevenwthornton0/Brewbook_client',
        server: 'https://github.com/Stevenwthornton0/Brewbook_server',
        jQuery: false,
        react: true,
        node: true
    },

    {
        id: 3,
        name: 'Marvel Search Engine',
        screenshot: Marvel,
        about: "This is a web application that allows the user to look up any character in the Marvel comic universe by character name, comic title, or event in the universe. This app accesses Marvel's API.",
        live: 'https://stevenwthornton0.github.io/API-Capstone/',
        client: 'https://github.com/Stevenwthornton0/API-Capstone',
        server: '',
        jQuery: true,
        react: false,
        node: false
    },

    {
        id: 4,
        name: 'Golf Quiz App',
        screenshot: Quiz,
        about: "This is a quiz on the game of golf. It uses HTML, CSS, and JavaScript (JQuery) to take users from the start page through a ten-question quiz. It gives feedback on correct and incorrect answers, and displays the user’s score out of 10 at the end of the quiz. Finally it allows you to retake the quiz.",
        live: 'https://stevenwthornton0.github.io/Stevens-Quiz-App/',
        client: 'https://github.com/Stevenwthornton0/Stevens-Quiz-App',
        server: '',
        jQuery: true,
        react: false,
        node: false
    }
]

export default projects;