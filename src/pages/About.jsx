const About = () => {
  return (
    <div className="container mx-auto p-4 max-w-4xl">
      <h1 className="text-2xl font-bold mb-4">About Us</h1>
      <div className="space-y-4">
        <p>
          Welcome to our Task Management System, designed to help you organize, track, and complete your tasks with ease and efficiency. Our goal is to provide a user-friendly interface that supports you in managing your time and responsibilities effectively.
        </p>
        <h2 className="text-xl font-semibold">Our Mission</h2>
        <p>
          Our mission is to empower individuals and teams to achieve their goals by offering a simple yet powerful tool for task management. We believe in the importance of productivity and aim to provide a system that enhances your ability to plan, prioritize, and accomplish tasks.
        </p>
        <h2 className="text-xl font-semibold">Features</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>Easy task creation and management</li>
          <li>Real-time updates and edits</li>
          <li>Efficient storage using device's local storage</li>
          <li>Clean and intuitive user interface</li>
          <li>Seamless navigation with React Router</li>
          <li>Responsive design with Tailwind CSS</li>
        </ul>
        <h2 className="text-xl font-semibold">Why Choose Us?</h2>
        <p>
          We focus on providing a streamlined and effective task management experience without unnecessary complexities. Our system is ideal for users who want a straightforward solution to keep track of their daily activities and long-term projects.
        </p>
        <h2 className="text-xl font-semibold">Get in Touch</h2>
        <p>
          If you have any questions, feedback, or suggestions, please feel free to contact us via our <a href="/contact" className="text-blue-600 hover:underline">Contact Page</a>. We value your input and are always looking to improve our system.
        </p>
      </div>
    </div>
  );
};

export default About;