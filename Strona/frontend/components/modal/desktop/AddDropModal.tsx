import styled from "styled-components";
import ActionButton from "../../../components/common/ActionButton";
import Centered from "../../../components/common/Centered";
import Label from "../../../components/common/Label";
import { useRouter } from "next/router";
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css";
import { useEffect, useState } from "react";
import calendarIcon from "../../../public/img/icons/calendarIcon.png";
import { FileUploader } from 'react-drag-drop-files';
import { HiOutlinePhotograph } from "react-icons/hi";
const fileTypes = ["JPG", "PNG", "HEIC"];
import Image from "next/image";
import ModalTemplate from "../common/ModalTemplate";
import { IoIosClose } from "react-icons/io";
import PageTitle from "../../common/PageTitle";

const DropModal = ({onClose, mobile}: any) => {

    const [showCallendar, setShowCallendar] = useState(false);
    const [date, setDate] = useState(new Date());
    const[image, setImage] = useState(null);
    const[previewUrl, setPreviewUrl] = useState(""); 
    const router = useRouter();

      
      const handleFile = (image: any) => {
        setImage(image);
        setPreviewUrl(URL.createObjectURL(image));
      };
  
    return (
        <>
        <ModalTemplate onClose={() => onClose()}>
        <div style={{width: "64rem"}}>
        <CloseModal onClick={() => onClose()}><IoIosClose></IoIosClose></CloseModal>
        <PageContainer>
            <Centered>
            <FileUploader hoverTitle="Drop here" handleChange={handleFile} name="file" types={fileTypes} multiple={false} label="Drop an image" >
                { (previewUrl && image) ?
                    <DropboxContainer>
                        <div className="w-full text-center text-gray-500 mb-2">Uploaded:</div>                        
                          <div style={{display: "flex", justifyContent: "center", width: "90%", height: "15rem"}} className="image">
                            <img style={{width: "100%", height: "auto", objectFit: "contain"}} src={previewUrl} alt='image' /> 
                            </div> 
                        <div className="w-full text-center text-gray-500 mt-4">Drop/click to add more</div>
                    </DropboxContainer>  
                    :
                    <DropboxContainer>
                      <div className="w-full flex justify-center">
                        <HiOutlinePhotograph className="w-24 h-24 text-gray-300"/>
                      </div>
                      <div className="w-full text-center text-gray-500">Drop an image</div>
                      <div className="w-full text-center text-gray-400">Square size at least 1080 X 1080</div>
                    </DropboxContainer>            
                    }
            </FileUploader>
            </Centered>
            <Layout>
                {!mobile && <PageTitle>Drop Details</PageTitle>}
                <Row>
                    <InputContainer>
                        <Label>Date</Label>
                        <DatePicker
                            className="appearance-none border border-[#C0C0C0] bg-[#F5F5F5] flex items-center justify-end block w-full md:w-64 h-10 mt-2 pl-2 2xl:px-2 relative py-2 rounded-xl placeholder-white focus:outline-none text-md "
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
            <ButtonContainer onClick={() => router.replace("/upcoming")}>
                <Centered>
                    <ActionButton text="SCHEDULE DROP" icon={calendarIcon}/>
                </Centered>
            </ButtonContainer>
        </PageContainer>
        </div>
        </ModalTemplate>
        </>
    )
}

export default DropModal;

const CloseModal  = styled.button`
    display: flex;
    font-size: 2.2em;
    align-items: center;
    cursor: pointer;
    position: absolute;
    top: 1rem;
    right: 1rem;
    border: none;
    background-color: transparent;
    z-index: 100;
`

const Layout = styled.div`
    width: 95%;
    margin: 0 auto;
    @media (min-width: 768px) {
        height: 100%;
        padding: 0rem 2rem 2rem 2rem;
    }
`
const PageContainer = styled.div`
    padding-bottom: 7rem;
    @media (min-width: 768px) {
        padding-bottom: 0;
        display: grid; 
        grid-template-columns: 1fr 1fr; 
        grid-template-rows: 1.9fr 0.1fr; 
        gap: 0px 0px; 
        grid-template-areas: 
            ". ."
            "button-container button-container";
            padding-bottom: 0rem;
    }
`

const DropboxContainer = styled.div`
    width: 95vw;
    height: 60vw;
    background-color: #F1F1F1;
    border-radius: 10px;
    cursor: pointer;
    display: flex;
    align-content: center;
    justify-content: center;
    flex-wrap: wrap;
    margin-bottom: 1.5rem;
    @media (min-width: 768px) {
        width: 22rem;
        height: 22rem;
        margin-top: 1rem;
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
        width: 8rem;
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
        width: 16rem;
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
`

const ButtonContainer = styled.div`
    @media (min-width: 768px) {
        margin-top: 1rem;
        wdith: 100%;
        grid-area: button-container;
    }
`