import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./SelectionMenuComponent.css";
import { useDispatch } from 'react-redux';
import { showSection } from './SectionAction';

const SelectionMenuComponent = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch()
    
    const handleSection = (section) => {
        dispatch(showSection(section))
        navigate(`/${section}`);
    };

    return (
        <div className='mainContainer'>
            <span>Select a section to explore!</span>
            <div className='containerSections'>
                <div className='containerSection' onClick={() => handleSection('characters')}>
                    <img src="https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2019/03/2019-03-14-HeroesComic.jpg?tf=1200x675" alt="Characters" />
                    <div className='overlay'></div>
                    <span>Characters</span>
                </div>
                <div className='containerSection' onClick={() => handleSection('comics')}>
                    <img src="https://salvaespin.com/wp-content/uploads/2022/03/logo-marvel-comics-de-los-90.jpg" alt="Comics" />
                    <div className='overlay'></div>
                    <span>Comics</span>
                </div>
                <div className='containerSection' onClick={() => handleSection('series')}>
                    <img src="https://estaticos-cdn.prensaiberica.es/clip/0dc6a308-fce8-42b3-87d5-e93e889bee4c_alta-libre-aspect-ratio_default_0.jpg" alt="Series" />
                    <div className='overlay'></div>
                    <span>Series</span>
                </div>
            </div>      
        </div>
    );
};

export default SelectionMenuComponent;
