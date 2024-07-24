import React from 'react';
import './Mains.css';
import { IoIosSearch } from "react-icons/io";
import heroBg from "../../assets/hero-bg.jpg";
import companyLogo1 from "../../assets/company-logo-1.png";
import companyLogo2 from '../../assets/company-logo-2.png';
import companyLogo3 from '../../assets/company-logo-3.png';
import companyLogo4 from '../../assets/company-logo-4.png';
import companyLogo5 from '../../assets/company-logo-5.png';
import companyLogo6 from '../../assets/company-logo-6.png';
import image1 from "../../assets/loc-san-francisco.jpeg";
import image2 from "../../assets/loc-san-diego.jpeg";
import image3 from "../../assets/loc-los-angeles.jpeg";
import image4 from "../../assets/loc-new-york.jpeg";
import image5 from "../../assets/loc-chicago.jpeg";
import image6 from "../../assets/loc-seattle.jpeg";
import image7 from "../../assets/loc-houston.jpeg";
import image8 from "../../assets/loc-boston.jpeg";
import logo1 from "../../assets/logo-1.png";
import logo2 from "../../assets/logo-2.png";
import logo3 from "../../assets/logo-3.png";
import logo4 from "../../assets/logo-4.png";
import logo5 from "../../assets/logo-5.png";
import pic from "../../assets/subscribe.png"
import { FaGlobeAsia } from "react-icons/fa";
import { FaChartPie, FaBuilding, FaHeadset, FaChartLine, FaStethoscope, FaIdBadge } from "react-icons/fa";
import { BsGraphUpArrow } from "react-icons/bs";

const icons = [
    {logos: logo1},
    {logos: logo2},
    {logos: logo3},
    {logos: logo4},
    {logos: logo5},


];

const categories = [
    { name: 'Construction', positions: 1, icon: <FaBuilding /> },
    { name: 'Customer Service', positions: 1, icon: <FaHeadset /> },
    { name: 'Finance', positions: 1, icon: <FaChartLine /> },
    { name: 'Healthcare', positions: 0, icon: <FaStethoscope /> },
    { name: 'Human Resources', positions: 2, icon: <FaIdBadge /> },
];

const featured = [
    {
        icon: <BsGraphUpArrow />,
        category: 'Finance',
        icon3: <FaGlobeAsia />,
        image: companyLogo1,
        title: 'Financial Analyst',
        location: 'San Diego, CA',
        type: 'Full Time',
        date: 'June 8, 2022',
        company: 'Gramware',
    },
    {
        icon: <BsGraphUpArrow />,
        icon3: <FaGlobeAsia />,
        category: 'Software Engineering',
        image: companyLogo2,
        title: 'Fullstack Web Developer',
        location: 'San Francisco, CA',
        type: 'Internship',
        date: 'June 8, 2022',
        company: 'Sysprosoft',
    },
    {
        icon: <BsGraphUpArrow />,
        icon3: <FaGlobeAsia />,
        category: 'Human Resources',
        image: companyLogo3,
        title: 'Human Resources Coordinator',
        location: 'San Diego, CA',
        type: 'Full Time',
        date: 'June 8, 2022',
        company: 'DataRes',
    },
    {
        icon: <BsGraphUpArrow />,
        icon3: <FaGlobeAsia />,
        category: 'Business Development',
        image: companyLogo4,
        title: 'Technical Writer',
        location: 'Los Angeles, CA',
        type: 'Remote',
        date: 'June 7, 2022',
        company: 'Craftgenics',
    },
    {
        icon: <BsGraphUpArrow />,
        icon3: <FaGlobeAsia />,
        category: 'Customer Service',
        image: companyLogo5,
        title: 'Technical Support Engineer',
        location: 'San Diego, CA',
        type: 'Part Time',
        date: 'June 7, 2022',
        company: 'Illuminate Studio',
    },
    {
        icon: <BsGraphUpArrow />,
        icon3: <FaGlobeAsia />,
        category: 'Project Management',
        image: companyLogo3,
        title: 'Software Engineering Team Leader',
        location: 'Los Angeles, CA',
        type: 'Contract',
        date: 'June 7, 2022',
        company: 'CoderBotics',
    },
    {
        icon: <BsGraphUpArrow />,
        icon3: <FaGlobeAsia />,
        category: 'Marketing & Communication',
        image: companyLogo6,
        title: 'Senior Editor',
        location: 'San Francisco, CA',
        type: 'Full Time',
        date: 'June 6, 2022',
        company: 'Artistre Studio',
    },
    {
        icon: <BsGraphUpArrow />,
        icon3: <FaGlobeAsia />,
        category: 'Software Engineering',
        image: companyLogo2,
        title: 'Javascript Developer',
        location: 'San Francisco, CA',
        type: 'Full Time',
        date: 'June 8, 2022',
        company: 'Sysprosoft',
    },
];

const companies = [

    {
        image: companyLogo3,
        company: 'Codebotics',
        info: 'CoderBotics, Inc. is an American multinational corporation that is engaged in the design, development, manufacturing, and worldwide marketing and sales of footwear, apparel, equipment, accessories, and services.',
        jobs: 1
    },
    {
        image: companyLogo2,
        company: 'Syspresoft',
        info: 'Syspresoft, Inc. is an American multinational corporation that is engaged in the design, development, manufacturing, and worldwide marketing and sales of footwear, apparel, equipment, accessories, and services. ',
        jobs: 2
    },
    {
        image: companyLogo5,
        company: 'Illuminate Studio',
        info: 'Illuminate Studio, Inc. is an American multinational corporation that is engaged in the design, development, manufacturing, and worldwide marketing and sales of footwear, apparel, equipment, accessories, and services.',
        jobs: 1
    },
    {

        image: companyLogo6,
        company: 'Artistre Studio',
        info: 'Artistre Studio, Inc. is an American multinational corporation that is engaged in the design, development, manufacturing, and worldwide marketing and sales of footwear, apparel, equipment, accessories, and services.',
        jobs: 1

    }
];

const cities = [

    {
        image: image1,
        city: "San Francisco, CA",
        position: 3

    },
    {

        image: image2,
        city: "San Diego, CA",
        position: 3


    },
    {

        image: image3,
        city: "San Angeles, CA",
        position: 3


    },
    {

        image: image4,
        city: "New York, NY",
        position: 0


    },
    {
        image: image5,
        city: "Chicago, IL",
        position: 3

    },
    {
        image: image6,
        city: "Seattle, WA",
        position: 0

    },
    {
        image: image7,
        city: "Houstan, TX",
        position: 0

    },
    {
        image: image8,
        city: "Bostan, MA",
        position: 1

    }

];

const Mains = () => {
    return (
        <>
            <section className="hero">
                <div className="left-container">
                    <div className="title">Find the perfect job for you</div>
                    <div className="subtitle">Search your career opportunity through 12,800 jobs</div>
                    <div className="search">
                        <input type="text" className="text" placeholder='Job title' />
                        <input type="text" className="text" placeholder='All locations' />
                        <button><IoIosSearch /></button>
                    </div>
                    <div className="popular-searches">
                        <div className='title'>Popular Searches</div>
                        <div className='search'>
                            <span>designer</span><span>writer</span><span>Team Leader</span><span>Full Stack</span><span>Web developer</span><span>Software</span><span>Web</span><span>Senior</span>
                            <span>Financial Analytics</span><span>Techn</span>
                        </div>
                    </div>
                    <div className="company-icons">
                        {icons.map((icons, index) => (
                            <div className="logos" key={index}>
                                
                                    <img src={icons.logos} alt="" />
                                
                            </div>
                        ))}
                    </div>
                </div>
                <div className="right-container">
                    <div className='Top-image'>
                        <img className='hero-bg' src={heroBg} alt="" />
                        <div className="job-offers">
                            <div className="job">
                                <div className='job-content'>
                                    <span className='job-number'>319</span>
                                    <span className='job-text'>Job offers</span>
                                </div>
                                <div>
                                    <span className='job-detail'>in Business Development</span>
                                </div>
                            </div>
                            <div className="job">
                                <div className='job-content'>
                                    <span className='job-number'>265</span>
                                    <span className='job-text'>Job offers</span>
                                </div>
                                <div>
                                    <span className='job-detail'>in Marketing & Communication</span>
                                </div>
                            </div>
                            <div className="job">
                                <div className='job-content'>
                                    <span className='job-number'>324</span>
                                    <span className='job-text'>Job offers</span>
                                </div>
                                <div>
                                    <span className='job-detail'>in Project Management</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='middle-image'></div>
                    <div className='last-image'></div>
                </div>
                <div className="box">
                </div>
            </section>


            <section>
                <div className="search-by-category">
                    <div className="category-title">
                        <span className='title'>Search by Category</span>
                        <p className='para'>Search your career opportunity with our categories</p>
                    </div>

                    <div className="cards-container">
                        <div className="card-first">
                            <span className='symbol'> <FaChartPie /> </span>
                            <span className='card-content'>Business Development</span>
                            <span className='card-position'>2 open positions</span>
                        </div>
                        {categories.map((category, index) => (
                            <div className="card" key={index}>
                                <span className='symbol'>{category.icon}</span>
                                <span className='card-content'>{category.name}</span>
                                <span className='card-position'>{category.positions} open positions</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <section>
                <div className="featured-job-offers">
                    <div className="job-offer-title">
                        <span className='title'>Featured Job Offers</span>
                        <p className='para'>Search your career opportunity through 12,800 jobs</p>
                    </div>

                    <div className="card-container">
                        {featured.map((featured, index) => (
                            <div className="cards" key={index}>
                                <span className='icon-category'>
                                    {featured.icon}{featured.category}
                                </span>
                                <span className='title'>
                                    {featured.title}
                                </span>
                                <span className="location-type-icon3">
                                    <span className='location-icon3'> <span className='icon3'><FaGlobeAsia /></span>
                                        <span className='location'>{featured.location} </span></span><span className='type'>{featured.type}</span>
                                </span>
                                <span className="date-company-icon2">
                                    <div className='date-company'>
                                        <span className='date'>{featured.date}</span> <span className='company'>{featured.company}</span>
                                    </div>
                                    <div className="image">
                                        <img src={featured.image} alt="" />

                                    </div>
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>



            <section>
                <div className="find-best-company">
                    <div className="title-para">
                        <div className="title">
                            Find Best Company
                        </div>
                        <div className="para">
                            Work for the best companies in the world
                        </div>
                    </div>
                    <div className="card-containers">
                        {companies.map((company, index) => (
                            <div className="card" key={index}>
                                <div className="images">
                                    <div className="image">
                                        <img src={company.image} alt={company.company} />
                                    </div>

                                    <div className="content">
                                        <span className='company'>{company.company}</span>
                                        <p className='company-info'>{company.info}</p>
                                        <span className='jobs'>{company.jobs} jobs</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <section>
                <div className="featured-cities">
                    <div className="featured-cities-title">
                        <span className='title'>Featured cities</span>
                        <p className='para'>Start your next carrer in a beautiful city</p>
                    </div>
                    <div className="cards-contain">
                        {cities.map((cities, index) => (
                            <div className="card" key={index}>
                                <div className="images">
                                    <div className="image">
                                        <img src={cities.image} alt={cities.cities} />
                                    </div>

                                    <div className="content">
                                        <span className='city'>{cities.city}</span>
                                        <span className='position'>{cities.position} open positions</span>
                                    </div>
                                </div>
                            </div>
                        ))}

                    </div>
                </div>
            </section>
            <section>
                <div className="up-date">
                    <div className="update-title">
                        <span className="heading">Stay Up to Date</span>
                        <p className='note'>Subscribe to our newsletter to receive our weekly feed.
                        </p>
                    </div>
                    <div className="picture"><img src={pic} alt="" /></div>
                    <div className="enter-email-subscribe">
                        <input type="email" className="email" placeholder='Enter your email' />
                        <button>Subscribe</button>
                    </div>
                </div>
            </section>
            <section>

            </section>
        </>
    );
}

export default Mains;
