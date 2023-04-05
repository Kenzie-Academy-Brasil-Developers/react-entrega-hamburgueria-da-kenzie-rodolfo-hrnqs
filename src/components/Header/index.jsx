import Logo from "../../assets/logo.svg"
import { StyledContainer } from "../../styles/grid"
import { InputSearch } from "./InputSearch"
import { StyledHeader } from "./style"

export const Header = ({ setSearch }) => {
    return (
        <StyledHeader>
            <StyledContainer>
                <div className="flexBox">
                    <img src={Logo} alt="Logo Hamburgueria Kenzie" />
                    <InputSearch setSearch={setSearch} />
                </div>
            </StyledContainer>
        </StyledHeader>
    )
}