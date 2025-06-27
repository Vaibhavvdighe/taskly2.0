import { Link } from "react-router-dom"

const About = () => {
  return (
    <div className='flex flex-col md:flex-row gap-2 items-center'>
      <div className="app m-auto flex justify-around flex-col md:w-2/3 bg-stone-300 p-4 rounded-xl my-1 h-fit w-11/12">
        <h1 className='font-bold md:text-xl'>About the App</h1>
        <h1 className='font-bold text-sm'>Taskly: Get it Done</h1>
        <p className="text-xs md:text-sm my-2">Stay on top of your tasks and boost your productivity with Taskly, a simple and intuitive todo app designed to help you get things done!
        </p>
        <p className="text-xs md:text-sm my-2">With Taskly, you can easily create and manage your to-do lists, set priorities, and track your progress. Our app is designed to be user-friendly and easy to navigate, so you can focus on what matters most - completing your tasks!</p>

        <h4 className="text-xs md:text-sm my-2">Key Features:</h4>
        <ul className="text-xs md:text-sm my-2">
            <li> ✏️ Create and manage your to-do lists with ease</li>
            <li> 📌 Set priorities and deadlines to stay on track</li>
            <li> ✅ Track your progress and celebrate your accomplishments</li>
            <li> 🎨 Customize your experience with our theme options (Will be released shortly)</li>
            <li> ⚡ Easy to use and navigate, so you can focus on getting things done!</li>
        </ul>
      </div>

      <div className="dev m-auto flex flex-col justify-around md:w-2/3 bg-stone-300 p-4 rounded-xl my-1 h-fit w-11/12">
        <h1 className='font-bold md:text-xl'>About Me</h1>
        <p className="text-xs md:text-sm my-2">I’m Vaibhav Dighe, a current Master’s student in Computer Science at the University of Oklahoma, originally from India. With a 4.0 GPA, I’m deeply passionate about building impactful tech solutions and continuously expanding my technical skillset.</p>
        
        <p className="text-xs md:text-sm my-2">My interests lie in full stack development (MERN), data analytics, and solving real-world problems through software and data-driven approaches. I’ve worked on projects ranging from workflow automation to deep learning-based plant disease detection, and I enjoy creating systems that bring real value.</p>

        <p className="text-xs md:text-sm my-2">Outside of academics, I love watching movies, listening to music, singing, playing the guitar, and capturing life through photos and videos. I believe in balancing creativity with logic — and I’m always excited to learn, build, and grow.</p>

        <div className="connect flex text-xs md:text-sm my-2">
            <p>Feel free to reach out or connect with me on 
            <Link to="https://www.linkedin.com/in/vaibhavdighe/" className="text-blue-400 font-bold hover:underline"> LinkedIn </Link>
            — I’m always open to meaningful conversations, collaborations, and opportunities to grow together.</p>
        </div>
      </div>
    </div>
  )
}

export default About
