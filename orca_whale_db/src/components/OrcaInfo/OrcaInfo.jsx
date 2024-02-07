import React, {useState, useEffect} from 'react';
import './OrcaInfo.css';

const OrcaInfo = () => {
    return (
        <div>
            <h1>About speciesname</h1>
            <div className = "Sightings-post">
                <h2>{"Post Title"}</h2>
                <h3>{"by author?"}</h3>
                <p>{
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eleifend odio at elit tristique, id ultricies enim fringilla. Vivamus ut dolor sed velit luctus hendrerit vel ut purus. Sed nec magna nec mauris varius fermentum. Aliquam non tellus auctor, interdum elit eu, consequat ligula. Etiam vel ipsum auctor, ultricies metus nec, ultricies lorem. Curabitur vitae fermentum ante. Sed consectetur eros at leo fringilla, eget posuere enim fermentum. Maecenas euismod hendrerit metus, eu euismod enim pellentesque id. Suspendisse potenti. Nunc sit amet interdum lacus.\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eleifend odio at elit tristique, id ultricies enim fringilla. Vivamus ut dolor sed velit luctus hendrerit vel ut purus. Sed nec magna nec mauris varius fermentum. Aliquam non tellus auctor, interdum elit eu, consequat ligula. Etiam vel ipsum auctor, ultricies metus nec, ultricies lorem. Curabitur vitae fermentum ante. Sed consectetur eros at leo fringilla, eget posuere enim fermentum. Maecenas euismod hendrerit metus, eu euismod enim pellentesque id. Suspendisse potenti. Nunc sit amet interdum lacus."}</p>
            </div>


        </div>
    );
};

export default OrcaInfo;