import styled from "styled-components";
import ActionButton from "../components/common/ActionButton";
import LoadingPage from "../components/common/LoadingPage";
import Navbar from "../components/common/Navbar";
import Centered from "../components/common/Centered";
import Label from "../components/common/Label";
import { useRouter } from "next/router";
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css";
import { useEffect, useState } from "react";
import calendarIcon from "../public/img/icons/calendarIcon.png";
import { FileUploader } from 'react-drag-drop-files';
import { HiOutlinePhotograph } from "react-icons/hi";
const fileTypes = ["JPG", "PNG", "HEIC", "JPEG"];

const Product = () => {

    const [showCallendar, setShowCallendar] = useState(false);
    const [date, setDate] = useState(new Date());
    const [imageList, setImageList] = useState<any[]>([]);
    const [mobile, setMobile] = useState(true);
    const[previewUrl, setPreviewUrl] = useState(""); 
    const[image, setImage] = useState(null);

    const router = useRouter();


    useEffect(() => {
        if(window.innerWidth >= 768){
          setMobile(false);
        }
    }, [])
      
    const handleFile = (image: any) => {
        setImage(image);
        setPreviewUrl(URL.createObjectURL(image));
      };
      
    return (
        <MainContainer>
        <Navbar showProfile={true} admin={true}  showHome={true} showUpcoming={true}/>
        <LoadingPage />
        {mobile ?
        <PageContainer>
            <Centered>
            <FileUploader hoverTitle="Drop here" handleChange={handleFile} name="file" types={fileTypes} multiple={false} label="Drop an image" >
                {(previewUrl && image) ?
                    <DropboxContainer>
                        <div className="w-full text-center text-gray-500 mb-1">Uploaded:</div>                        
                          <div style={{display: "flex", justifyContent: "center", width: "90%", height: "11rem"}} className="image">
                            <img style={{width: "100%", height: "auto", objectFit: "contain"}} src={previewUrl} alt='image' /> 
                            </div> 
                        <div className="w-full text-center text-gray-500 mt-1">Click to add more</div>
                    </DropboxContainer>  
                    :
                    <DropboxContainer>
                      <div className="w-full flex justify-center">
                        <HiOutlinePhotograph className="w-24 h-24 text-gray-300"/>
                      </div>
                      <div className="w-full text-center text-gray-500">Drop an image</div>
                    </DropboxContainer>            
                    }
            </FileUploader>
            </Centered>
            <Layout>
                <Row>
                    <InputContainer>
                        <Label>Date</Label>
                        <DatePicker
                            className="appearance-none border border-[#C0C0C0] bg-[#F5F5F5] flex items-center justify-end block w-full lg:w-72 h-10 mt-2 pl-2  2xl:px-6 relative py-2 rounded-xl placeholder-white focus:outline-none text-md 2xl:text-2xl"
                            selected={date}
                            onChange={(date) => setDate(date!)}
                            showTimeSelect
                            timeFormat="HH:mm"
                            timeIntervals={15}
                            timeCaption="time"
                            dateFormat="MMMM d, yyyy h:mm aa"
                        />
                    </InputContainer>
                    <ShortInputContainer>
                        <Label>Supply</Label>
                        <ShortInput placeholder="1000" />
                    </ShortInputContainer>
                </Row>
                <Row>
                <InputContainer>
                        <Label>Product name</Label>
                        <Input placeholder="New Product"></Input>
                </InputContainer>
                <ShortInputContainer>
                        <Label>Price $</Label>
                        <ShortInput placeholder="123" />
                </ShortInputContainer>
                </Row>
                <Label>Description</Label>
                <TextArea placeholder="Your item description"></TextArea>
            </Layout>
            <div onClick={() => router.replace("/upcoming")}>
                <ActionButton text="SCHEDULE DROP" icon={calendarIcon}/>
            </div>     
        </PageContainer>
        :
        <div style={{width: "100%", display: "flex", justifyContent: "center", marginTop: "40vh"}}>
            Page not found
        </div>   
        }           
        </MainContainer>
    )
}

export default Product;

const Layout = styled.div`
    width: 95vw;
    margin: 0 auto;
    @media (min-width: 768px) {
        width: 18rem;
        margin: 0 0 0 0;
    }
`
const MainContainer = styled.div`
    @media (min-width: 768px) {
        height: 100vh;
        position: absolute;
        width: 100%;
        overflow: hidden;
    }
`
const PageContainer = styled.div`
    padding-bottom: 7rem;
    @media (min-width: 768px) {
        display: grid; 
        grid-template-columns: 1fr 1fr; 
        grid-template-rows: 1fr; 
        gap: 0px 0px; 
        grid-template-areas: 
          ". .";
        padding-bottom: 0rem;
        height: 100vh;
        align-items: center;
    }
`

const DropboxContainer = styled.div`
    width: 95vw;
    height: 70vw;
    background-color: #F1F1F1;
    border-radius: 10px;
    cursor: pointer;
    display: flex;
    align-content: center;
    justify-content: center;
    flex-wrap: wrap;
    margin-bottom: 1.5rem;
    @media (min-width: 768px) {
        width: 35rem;
        height: 35rem;
        border: 3px dashed #DBDBDB;
    }
`

const Row = styled.div`
    display: grid; 
    grid-template-columns: 1.4fr 0.6fr; 
    grid-template-rows: 1fr; 
    gap: 0px 0px; 
    grid-template-areas: 
    ". ."; 
`
const InputContainer = styled.div`
    margin: 0rem 1rem 1rem 0rem;
`
const ShortInputContainer = styled.div`
    margin: 0rem 0rem 1rem 0rem;
`
const ShortInput = styled.input`
    width: 27vw;
    height: 2.4rem;
    margin-top: 0.5rem;
    background-color: #F5F5F5;
    border: 1px solid #C0C0C0;
    outline: none;
    border-radius: 10px;
    padding-left: 0.5rem;
    @media (min-width: 768px) {
        width: 12rem;
    }
`

const Input = styled.input`
    width: 100%;
    height: 2.4rem;
    margin-top: 0.5rem;
    background-color: #F5F5F5;
    border: 1px solid #C0C0C0;
    outline: none;
    border-radius: 10px;
    padding-left: 0.5rem;
    font-size: 1em;
    @media (min-width: 768px) {
        width: 18rem;
    }
`

const TextArea = styled.textarea`
    width: 100%;
    height: 6rem;
    margin-top: 0.5rem;
    background-color: #F5F5F5;
    border: 1px solid #C0C0C0;
    outline: none;
    border-radius: 10px;
    padding: 0.4rem 0.5rem 0.3rem 0.5rem;
    font-size: 1em;
    @media (min-width: 768px) {
        width: 31rem;
    }
`