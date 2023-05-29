import CreatableSelect from "react-select/creatable";

const SelectCateg = ({ isMulti = false, ...props }) => {
    const customStyles = {
        control: (provided, state) => ({
            ...provided,
            borderRadius: "4px",
            borderWidth: "1px",
            borderColor: state.isFocused ? "#06B6D4" : "#E2E8F0",
            boxShadow: "none",
            "&:hover": {
                borderColor: state.isFocused ? "#06B6D4" : "#CBD5E0"
            },
        }),
        menu: (provided) => ({
            ...provided,
            borderRadius: "4px",
            marginTop: "0",
            boxShadow: "0 1px 2px rgba(0, 0, 0, 0.05)",
            border: "1px solid #E2E8F0"
        }),
        multiValue: (provided) => ({
            ...provided,
            backgroundColor: "#E2E8F0",
            borderRadius: "4px",
            padding: "2px 4px",
            marginRight: "4px",
            marginBottom: "4px",
            color: "#4A5568",
            fontSize: "0.875rem",
            fontWeight: "400",
        }),
        multiValueRemove: (provided) => ({
            ...provided,
            borderRadius: "0 4px 4px 0",
            cursor: "pointer",
            "&:hover": {
                backgroundColor: "#CBD5E0",
            }
        }),
        option: (provided, state) => ({
            ...provided,
            backgroundColor: state.isSelected ? "#E2E8F0" : "white",
            color: state.isSelected ? "#4A5568" : "#1A202C",
            "&:hover": {
                backgroundColor: state.isSelected ? "#E2E8F0" : "#F7FAFC"
            },
            fontSize: "0.875rem",
            fontWeight: "400",
        }),
    };



    const handleChange = (selectedOption, actionMeta) => {
        props.setSelectedOption(selectedOption);
    };

    const handleInputChange = (inputValue, actionMeta) => {
        console.log("handleInputChange", inputValue, actionMeta);
    };

    return (
        <CreatableSelect
            options={props.options}
            onChange={handleChange}
            onInputChange={handleInputChange}
            isMulti = {isMulti}
            styles={customStyles}
            placeholder={props.title}
            value={props.selectedOption}
            isSearchable={false} // <-- Allow typing
            // <-- use value here
        />
    );
};

export default SelectCateg;
