import Card from 'react-bootstrap/Card';
import 'react-medium-image-zoom/dist/styles.css'
import Zoom from 'react-medium-image-zoom'

const Photos=()=>{
    const tab1 =
        [
            "https://i.pinimg.com/564x/9f/75/c7/9f75c7226c6036b5b461e3d1151dc75f.jpg",
            "https://images.squarespace-cdn.com/content/v1/6195288d4315b3125cd7af80/9fbd4ac9-4fcc-43b0-a5d3-0ca9c181c28c/_DSC9180.jpg?format=500w",
            "https://images.squarespace-cdn.com/content/v1/6195288d4315b3125cd7af80/7fdc5cec-8f38-4527-bc27-c9219924cc1d/_DSC9539.jpg?format=500w",
            "https://images.squarespace-cdn.com/content/v1/6195288d4315b3125cd7af80/9769308c-78cc-4058-956f-8e2821fd520f/_DSC4900.jpg?format=500w",
            "https://images.squarespace-cdn.com/content/v1/6195288d4315b3125cd7af80/47e4a028-b10e-475a-9c75-8735ba3eadd5/_DSC4676.jpg?format=500w",
            "https://images.squarespace-cdn.com/content/v1/6195288d4315b3125cd7af80/11c5ad0f-b9bb-4627-8ffe-58d0d067937f/_DSC5285.jpg?format=500w",
            "https://images.squarespace-cdn.com/content/v1/6195288d4315b3125cd7af80/18a77d43-30bc-4338-80cd-3a76eb9f6829/_DSC0051.jpg?format=300w",
            "https://images.squarespace-cdn.com/content/v1/6195288d4315b3125cd7af80/9cac7567-7593-4f65-a1ab-1a88248a4e96/_DSC4145.jpg?format=500w"

        ];

    const tab2 = [
        "https://images.squarespace-cdn.com/content/v1/6195288d4315b3125cd7af80/328dd841-dc56-499e-9188-0d8f03a61612/_DSC1175.jpg?format=500w",
        "https://images.squarespace-cdn.com/content/v1/6195288d4315b3125cd7af80/9dc5cb93-4720-4962-ab07-68bc97efaf26/_DSC1083.jpg?format=500w",
        "https://images.squarespace-cdn.com/content/v1/6195288d4315b3125cd7af80/faa78a13-0ea4-408a-bff7-0eb5a41f1d47/_DSC1301.jpg?format=500w",

    ]
    const tab3 =[
        "https://images.squarespace-cdn.com/content/v1/6195288d4315b3125cd7af80/d9deb524-975f-471e-bfd6-1710b6cd0de8/_DSC2146.jpg?format=500w",
        "https://images.squarespace-cdn.com/content/v1/6195288d4315b3125cd7af80/7abf9eb7-62b4-4fc9-8c1f-c84c6a13974b/_DSC0281.jpg?format=500w",
        "https://images.squarespace-cdn.com/content/v1/6195288d4315b3125cd7af80/73745e68-44db-47f1-b3f7-25487e59c521/_DSC0555.jpg?format=500w",
        "https://images.squarespace-cdn.com/content/v1/6195288d4315b3125cd7af80/9d5d60c3-08b5-4f94-bc1b-fe6a68c9e4ef/_DSC0740.jpg?format=500w",
        "https://images.squarespace-cdn.com/content/v1/6195288d4315b3125cd7af80/e503bfbf-1217-4d85-a430-d606ec7ca5ba/_DSC1241.jpg?format=500w",
        "https://images.squarespace-cdn.com/content/v1/6195288d4315b3125cd7af80/7be03068-c7d4-4455-92a2-ca9c5804d7e6/_DSC1710.jpg?format=500w",
        "https://images.squarespace-cdn.com/content/v1/6195288d4315b3125cd7af80/c9d579df-f44c-4d57-97e4-b67f0b8a632f/_DSC1932.jpg?format=500w",
        "https://images.squarespace-cdn.com/content/v1/6195288d4315b3125cd7af80/ae2b0e2a-421f-4f56-906e-c68e1d748d66/_DSC0341.jpg?format=500w",
        "https://images.squarespace-cdn.com/content/v1/6195288d4315b3125cd7af80/4ce0bf3c-9a56-448a-9343-72cb9958e35a/_DSC1288.jpg?format=500w",
        "https://images.squarespace-cdn.com/content/v1/6195288d4315b3125cd7af80/9f42248e-cf81-490c-bdea-a0803fe68914/_DSC1261.jpg?format=500w"
    ]
    const tab4 = [
        "https://images.squarespace-cdn.com/content/v1/6195288d4315b3125cd7af80/1609cc79-4142-4a6b-9a17-68797aae8110/_DSC8576.jpg?format=750w",
        "https://images.squarespace-cdn.com/content/v1/6195288d4315b3125cd7af80/d0a00ffd-76c2-457f-bbe8-8d5693a2c1b5/_DSC8187.jpg?format=500w",
        "https://images.squarespace-cdn.com/content/v1/6195288d4315b3125cd7af80/058cf3dd-afdf-420c-8966-1da9a7939c18/_DSC8351.jpg?format=500w",
        "https://images.squarespace-cdn.com/content/v1/6195288d4315b3125cd7af80/1943eca3-e567-4f74-a07c-5110cbdde92a/_DSC8480.jpg?format=500w",
        "https://images.squarespace-cdn.com/content/v1/6195288d4315b3125cd7af80/56fc4e0c-fb07-423b-a8bf-650ebf279c03/_DSC8505.jpg?format=500w",
        "https://images.squarespace-cdn.com/content/v1/6195288d4315b3125cd7af80/71b05692-e776-48f4-80bc-0b2433eb15fe/_DSC4584-Migliorato-NR.jpg?format=500w"
    ]

    const tab5 = [
        "https://keinemusik.com/wp-content/uploads/2024/01/keinemusik-in-the-jungle-image00004-768x512.jpg",
        "https://www.timeoutdubai.com/cloud/timeoutdubai/2023/10/27/SohoBeach_015.jpg",
        "https://i0.wp.com/l7za62.p3cdn1.secureserver.net/wp-content/uploads/2024/01/Keinemusik.jpeg?fit=%2C&ssl=1",
        "https://i0.wp.com/electronicgroove.com/wp-content/uploads/2024/02/Keinemusik-OffSonar.jpg",
        "https://i1.sndcdn.com/artworks-8QJpKqap5hLpEV9m-ZBZxcg-t500x500.jpg"

    ]

    const tab6 = [
        "https://scontent.cdninstagram.com/v/t39.30808-6/417507421_17916464348849729_811034167060682756_n.jpg?stp=dst-jpg_e15&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xMzY1eDIwNDguc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=105&_nc_ohc=NeUxdPdOYMoAX_ZrdDd&edm=APs17CUAAAAA&ccb=7-5&ig_cache_key=MzI3NDMwNjM4NDY0NzI3MTk0Mg%3D%3D.2-ccb7-5&oh=00_AfC-zS_jR5Zc9kIcA85uwv56TJBkUFt2SOEEi2tpIGWGqw&oe=65DA1EF7&_nc_sid=10d13b",
        "https://scontent.cdninstagram.com/v/t39.30808-6/417432359_17916464330849729_8480334624112190536_n.jpg?stp=dst-jpg_e15&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE3OTAuc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=105&_nc_ohc=ZmTtf-y5-xEAX8ccgSo&edm=APs17CUAAAAA&ccb=7-5&ig_cache_key=MzI3NDMwNjM4NDY0NzI3NTU4Nw%3D%3D.2-ccb7-5&oh=00_AfDnrzHEqUsk9vt9NymHTH2Mn_mNY1Q2AI2s3CMaOrjNSg&oe=65D9C9A9&_nc_sid=10d13b",
        "https://scontent.cdninstagram.com/v/t39.30808-6/417562224_17916464357849729_4885436388063761589_n.jpg?stp=dst-jpg_e15&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xMzY1eDIwNDguc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=105&_nc_ohc=j_oZ1KWSrLwAX_S96CZ&edm=APs17CUAAAAA&ccb=7-5&ig_cache_key=MzI3NDMwNjM4NDY1NTY3MjMwMA%3D%3D.2-ccb7-5&oh=00_AfDwS5XlqBJb6lne3hFTDzk2PELmoRS3j2JDXpjxu6Vf2A&oe=65D9C756&_nc_sid=10d13b",
        "https://scontent.cdninstagram.com/v/t39.30808-6/417001713_17916464339849729_6735942260258059495_n.jpg?stp=dst-jpg_e15&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xMTQ4eDIwNDguc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=105&_nc_ohc=bBqHA1JG1pAAX9ByUdn&edm=APs17CUAAAAA&ccb=7-5&ig_cache_key=MzI3NDMwNjM4NDY1NTc4ODc4Mw%3D%3D.2-ccb7-5&oh=00_AfA0xFFHoBoNL_JDK2EdKDLnRoBFmDXbxW45CJI3_GqV-Q&oe=65DABFA5&_nc_sid=10d13b",
        
    ]

    const tab7 = [
        "https://pbs.twimg.com/media/FsQgK5OXsAgdqqx?format=jpg&name=900x900",
        "https://pbs.twimg.com/media/FqX3Kp8XsAE_sYr?format=jpg&name=900x900",
        "https://pbs.twimg.com/media/FoU3SaQX0AI9u5S?format=jpg&name=900x900",
        "https://pbs.twimg.com/media/FgW2e8kWAAIiyJ8?format=jpg&name=900x900",
        "https://pbs.twimg.com/media/FhjuBBGWAAQ-MzK?format=jpg&name=900x900"
    ]
    const tab8 = [
        "https://images.squarespace-cdn.com/content/v1/6195288d4315b3125cd7af80/87067ede-2ea0-4bd3-bdab-31d332b28d2b/_DSC1675.jpg?format=500w",
        "https://images.squarespace-cdn.com/content/v1/6195288d4315b3125cd7af80/28dd1e61-0e39-4b99-8ca0-06679495e82c/DJI_0009.jpg?format=750w",
        "https://images.squarespace-cdn.com/content/v1/6195288d4315b3125cd7af80/b5ad7655-e33e-4247-907d-36a23247644f/_DSC2100.jpg?format=500w",
        "https://images.squarespace-cdn.com/content/v1/6195288d4315b3125cd7af80/97f7b93f-6cf8-42a4-bf0d-c2e33efe6983/_DSC1393.jpg?format=500w",
        "https://images.squarespace-cdn.com/content/v1/6195288d4315b3125cd7af80/a2e19533-ebfc-453d-b577-7995ce60f0f5/_DSC1532.jpg?format=500w",
        "https://images.squarespace-cdn.com/content/v1/6195288d4315b3125cd7af80/3e2b5a9d-5d8c-4dc3-bfb2-f6b1e7528360/_DSC1289.jpg?format=500w",
        "https://images.squarespace-cdn.com/content/v1/6195288d4315b3125cd7af80/abcc2169-913c-45db-ba09-2fb15c7c6760/_DSC5384.jpg?format=500w",
        "https://images.squarespace-cdn.com/content/v1/6195288d4315b3125cd7af80/927c1873-0ab7-4203-83cc-f1c593119960/_DSC1546.jpg?format=500w",
        
    ]
    return(
        <div className='label'>
            <div className='afterlife'>
            <div className='picCard'>
                <div className='pict'>
                    {
                        tab8.map((el,i,t)=> <Card key={i} style={{ width: '15rem', marginRight: "20px", marginBottom : "20px", marginBottom : "20px"}}>
                    
                    <Zoom>
                        <Card.Img style={{height: '350px', width : "100%"}} variant="top" src={el} />
                    </Zoom>                        
                    </Card>
                    )}
                    </div>
                    <br/>
                    <h3 style={{color : 'black'}}>AFTERLIFE TULUM 2024</h3>
                </div>
                <hr/>
                <div className='picCard'>
                <div className='pict'>
                    {
                        tab1.map((el,i,t)=> <Card key={i}  style={{ width: '15rem', marginRight: "20px", marginBottom : "20px"}}>
                    
                    <Zoom>
                        <Card.Img style={{height: '350px', width : "100%"}} variant="top" src={el} />
                    </Zoom>                        
                    </Card>
                    )}
                    </div>
                    <br/>
                    <h3 style={{color : 'black'}}>AFTERLIFE IBIZA CLOSING PARTY 2023</h3>
                </div>
                <hr/>
                <div className='picCard'>
                <div className='pict'>
                {
                        tab2.map((el,i,t)=> <Card key={i}  style={{ width: '15rem', marginRight: "20px", marginBottom : "20px"}}>
                    
                    <Zoom>
                        <Card.Img style={{height: '350px', width : "100%"}} variant="top" src={el} />
                    </Zoom>                        
                    </Card>
                    )}
                    </div>
                    <br/>
                    <h3 style={{color : 'black'}}> AFTERLIFE ORANGE 2023</h3>
                </div>
                <hr/>
                <div className='picCard'>
                <div className='pict'>
                {
                        tab3.map((el,i,t)=> <Card key={i}  style={{ width: '15rem', marginRight: "20px", marginBottom : "20px"}}>
                    <Zoom>
                        <Card.Img style={{height: '400px', width : "100%"}} variant="top" src={el} />
                    </Zoom>
                    </Card>
                    )}
                    </div>
                    <br/>
                    <h3 style={{color : 'black'}}> AFTERLIFE MIAMI 2023</h3>
                </div>
                <hr/>
                <div className='picCard'>
                    <div className='pict'>
                {
                        tab4.map((el,i,t)=> <Card key={i}  style={{ width: '15rem', marginRight: "20px", marginBottom : "20px"}}>
                    
                    <Zoom>
                        <Card.Img style={{height: '400px', width : "100%"}} variant="top" src={el} />
                    </Zoom>                        
                    </Card>
                    )}
                    </div>
                    <br/>
                    <h3 style={{color : 'black'}}> AFTERLIFE MEDELlIN 2023</h3>
                </div>
            </div>
            <hr/>
            <div className='other'>
                <div className='picCard'>
                <div className='pict'>
                {
                        tab5.map((el,i,t)=> <Card key={i}  style={{ width: '15rem', marginRight: "20px", marginBottom : "20px"}}>
                    
                    <Zoom>
                        <Card.Img style={{height: '350px', width : "100%"}} variant="top" src={el} />
                    </Zoom>                        
                    </Card>
                    )}
                    </div>
                    <br/>
                    <h3 style={{color : 'black'}}> KEINEMUSIK 2023</h3>
                </div>
                <hr/>
                <div className='picCard'>
                <div className='pict'>
                {
                        tab6.map((el,i,t)=> <Card key={i}  style={{ width: '15rem', marginRight: "20px", marginBottom : "20px"}}>
                    
                    <Zoom>
                        <Card.Img style={{height: '350px', width : "100%"}} variant="top" src={el} />
                    </Zoom>                        
                    </Card>
                    )}
                    </div>
                    <br/>
                    <h3 style={{color : 'black'}}> X-Future Adriatique 2023</h3>
                </div>
                <hr/>
                <div className='picCard'>
                <div className='pict'>
                {
                        tab7.map((el,i,t)=> <Card key={i}  style={{ width: '15rem', marginRight: "20px", marginBottom : "20px"}}>
                    
                    <Zoom>
                        <Card.Img style={{height: '350px' }} variant="top" src={el} />
                    </Zoom>                        
                    </Card>
                    )}
                    </div>
                    <br/>
                    <h3 style={{color : 'black'}}> MATHAME 2023</h3>
                </div>
                <br/>
                <br/>
                <br/>

            </div>

        </div>
    )
}

export default Photos