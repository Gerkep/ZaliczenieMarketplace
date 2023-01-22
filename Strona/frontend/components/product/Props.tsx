import styled from "styled-components";
import Label from "../common/Label";
import searchIcon from "../../public/img/icons/searchIcon.png";
import Image from "next/image";
import Link from "next/link";

const Props = (props: {owner: string, invoice: string, condition: string}) => {

    const {owner, invoice, condition} = props;

    return (
        <ProductProps>
            <Prop>
                <Label>Owner</Label>
                    <PropValue>
                        <Link href="/profile/gerke.eth">
                            {props.owner}
                        </Link>
                        <Link href="/profile/gerke.eth">
                            <Image alt="search" style={{width: "0.7rem", height: "0.7rem", marginLeft: "0.5rem"}} src={searchIcon}></Image>
                        </Link>
                    </PropValue>
            </Prop>
            {invoice &&
                <Prop>
                    <Label>Invoice</Label>
                    <PropValue>{props.invoice}</PropValue>
                </Prop>           
            }
            {condition &&
                <Prop>
                    <Label>Condition</Label>
                    <PropValue>{props.condition}</PropValue>
                </Prop>
            }
        </ProductProps>
    )
}

export default Props;

const ProductProps = styled.div`
    width: 100%;
    padding: 1rem;
    display: flex;
    flex-wrap: wrap;
`
const Prop = styled.div`
    margin: 1rem 2.5rem 1rem 0;
`

const PropValue = styled.p`
    font-weight: 500;
    font-size: 0.8em;
    display: flex;
    display: flex;
    align-items: center;
`
