import CategoryCard from '../../SharedComponent/CategoryCard/CategoryCard';
import EasyToStart from './EasyToStart/EasyToStart';
import EnrollNow from './EnrollNow/EnrollNow';
import Form from './Form/Form';
import Services from './Services/Services';
import TopQuestions from './TopQuestions/TopQuestions';
import UseOurApp from './UseOurApp/UseOurApp';

const Home = () => {
    return (
        <div className='max-w-[90%] mx-auto'>
            <UseOurApp />
            <EasyToStart />
            <EnrollNow />
            <CategoryCard/>
            <TopQuestions />
            <Services />
            <Form/>
           
        </div>
    );
};

export default Home;