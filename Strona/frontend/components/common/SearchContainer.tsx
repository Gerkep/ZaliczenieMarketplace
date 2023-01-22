import { FiSearch } from "react-icons/fi";
import { useAnimation, motion } from "framer-motion";
import styled from "styled-components";
import { FormEvent, useEffect, useRef, useState } from "react";
const animationVariants = {
    visible: { opacity: 1 },
    hidden: { opacity: 0}
};

const SearchInput = () => {

    const ref = useRef<any>(null);
    const formRef = useRef<any>(null);
    const [value, setValue] = useState('');
    const [inputVisible, setInputVisible] = useState(false);
    const controls = useAnimation();

    const handleClick = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        ref.current.focus();
        if(inputVisible){
            controls.start("hidden");
            setInputVisible(false);
        }else{
            controls.start("visible");
            setInputVisible(true);
        }
      };
    
      useEffect(() => {
        const handleClickOutside = (event: any) => {
          if (ref.current && !ref.current.contains(event.target)) {
            controls.start("hidden");
            setInputVisible(false);
          }
        };
        document.addEventListener('click', handleClickOutside, true);
        return () => {
          document.removeEventListener('click', handleClickOutside, true);
        };
      }, []);

    return (
        <div style={{display: "flex", alignItems: "center", justifyContent: "flex-end"}}>
            <form ref={formRef} onSubmit={(e) => handleClick(e)}>
                <motion.div variants={animationVariants} animate={controls} initial="hidden">
                    <Input ref={ref} placeholder="Search" value={value} onChange={(e) => setValue(e.target.value)}/>
                </motion.div>
                <SearchButton>
                    <FiSearch className="w-6 h-6 cursor-pointer text-black"/>
                </SearchButton>
            </form>
        </div>
    )
}

export default SearchInput;

const Input = styled.input`
    position: absolute;
    margin-top: 2.5rem;
    right: 2rem;
    height: 2.5rem;
    border-radius: 10px;
    border: 1px black #C0C0C0;
    padding-left: 1rem;
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    background-color: rgba(255, 255, 255, 0.7);
    &:focus {
        outline: none;
    }
`
const SearchButton = styled.button`
    display: flex;
    align-items: end;
    color: black;

`