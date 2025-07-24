export interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  buttonText: string;
  link: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Seamless Reservation App for Effortless Bookings",
    description: "A user-friendly reservation app that enables users to easily book tables, appointments, or services in just a few steps, streamlining the reservation process for both customers and businesses.",
    tags: ["React", "TypeScript", "CSS"],
    imageUrl: "public/reservation-app.png",
    buttonText: "View Project",
    link: "https://reservation-app-nine.vercel.app"
  },
  {
    id: 2,
    title: "Campus Resource Exchange: Helping students save money by sharing resources",
    description: "Created a user-friendly mobile app that helps students donate and loan resources.",
    tags: ["React", "TypeScript", "CSS"],
    imageUrl: "public/campus-resource.png",
    buttonText: "View Project",
    link: "https://campus-resource-exchange.vercel.app/"
  },
  {
    id: 3,
    title: "StayTrove",
    description: "Built a landing page for StayTrove, a platform that connects you to a wide range of real estate options – from apartments and studio flats to short lets – all designed to meet your unique needs.",
    tags: ["React", "TypeScript", "CSS", "Framer Motion"],
    imageUrl: "public/staytrove.png",
    buttonText: "View Project",
    link: "https://web.staytrove.com"
  },
];
