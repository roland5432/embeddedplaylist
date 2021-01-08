import React from 'react';

class Playlist extends React.Component {
    render() {
        return (
            <div>
                <iframe width="560" height="315" title='playlist'
                src="https://www.youtube.com/embed/videoseries?list=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; pictureinpicture" allowfullscreen></iframe>
            </div> 
        );
    };
}

export default Playlist;

