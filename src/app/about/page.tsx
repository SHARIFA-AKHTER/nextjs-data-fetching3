import { Metadata } from "next";

export const metadata:Metadata = {
    title: "About Us",
    description: "This Is About Us Page"
}
const AboutPage = () => {
    return (
        <div>
            <h1>This Is About Page</h1>
        </div>
    );
};

export default AboutPage;