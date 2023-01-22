import { Fragment, JSXElementConstructor, Key, ReactElement, ReactFragment, ReactPortal, SetStateAction, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { HiCheck, HiChevronDown } from 'react-icons/hi'
import styles from "../../styles/Home.module.css";
import Image from "next/image";
import styled from 'styled-components';

export default function Dropdown({values, value, onChange, error, id}: any) {
  const [selected, setSelected] = useState('');

  const handleChange = (value: SetStateAction<string>) => {
    setSelected(value)
      if (onChange) {
        onChange(value);
      }
  };


  return (
      <Listbox value={selected} onChange={handleChange}>
        <DropdownContainer id="button">
          <Listbox.Button className={"appearance-none border border-[#C0C0C0] bg-[#F5F5F5] flex items-center block w-full md:w-48 h-10 mt-1 pr-10 pl-2 relative py-2 rounded-xl placeholder-white focus:outline-none text-md "}>
            <span className="block truncate text-left">{selected ? selected : <div className='text-black'>{value}</div>}</span>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2 2xl:pr-4">
              <HiChevronDown
                id={id}
                className={error ? "h-5 w-5 text-red-300" :"h-5 w-5 2xl:h-8 2xl:w-8 text-black"}
                aria-hidden="true"
              />
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className={`absolute mt-1 z-50 max-h-60 w-full md:w-56 overflow-auto rounded-md bg-[#1D1D1D] py-1 text-sm ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm ${styles.montserrat}`}>
              {values.map((value: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined, valueIdx: Key | null | undefined) => (
                <Listbox.Option
                  key={valueIdx}
                  className={({ active }) =>
                    `relative cursor-pointer select-none py-2 pl-4 pr-4 ${
                      active ? 'bg-[#3A3A3A]' : 'text-white'
                    }`
                  }
                  value={value}
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={`block truncate text-white ${
                          selected ? 'font-medium' : 'font-normal'
                        }`}
                      >
                        {value}
                      </span>
                      {selected ? (
                        <span className="absolute inset-y-0 right-0 pr-2 flex items-center text-white">
                          <HiCheck className="h-5 w-5" aria-hidden="true" />
                        </span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </DropdownContainer>
      </Listbox>
  )
}

const DropdownContainer = styled.div`
 position: relative;
 width: 9.5rem;
 height: 100%;
`