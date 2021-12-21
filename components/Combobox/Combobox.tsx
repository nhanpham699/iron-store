import { TextField } from '@material-ui/core';
import {
	Autocomplete,
	AutocompleteGetTagProps,
	AutocompleteRenderOptionState,
} from '@material-ui/lab';
// import TextField from 'components/TextField/TextField';
import React from 'react';

interface arr {
	key?: string;
	text?: string;
}

interface Combobox {
	// autoComplete?: boolean | undefined;
	// autoHighlight?: boolean | undefined;
	// autoSelect?: boolean | undefined;
	fullWidth?: boolean | undefined;
	options: arr[];
	renderTags?: (value: any, getTagProps: AutocompleteGetTagProps) => React.ReactNode;
	renderOption?: (option: any, state: AutocompleteRenderOptionState) => React.ReactNode;
	size?: 'small' | 'medium';
	label?: string;
	inputRef?: React.Ref<any>;
	getOptionLabel?: (option: arr | any) => string;
	value?: any;
	onChange?: (event?: any, newValue?: any) => void;
	inputValue?: string;
	onInputChange?: (event: object, value: string) => void;
	id?: string;
	required?: boolean;
	variant?: 'outline' | 'filled' | 'standard' | any;
	error?: boolean;
}

const Combobox: React.FC<Combobox> = (props) => {
	return (
		<Autocomplete
			fullWidth={props.fullWidth || false}
			options={props?.options}
			getOptionLabel={props?.getOptionLabel}
			// style={{ width: '100%' }}
			renderInput={(params) => (
				<TextField
					{...params}
					label={props.label}
					variant={props?.variant || 'outlined'}
					inputRef={props.inputRef}
					required={props?.required}
					error={props?.error || false}
				/>
			)}
			renderTags={props.renderTags}
			renderOption={props.renderOption}
			size={props.size || 'medium'}
			onChange={props?.onChange}
			value={props?.value}
			inputValue={props?.inputValue}
			onInputChange={props?.onInputChange}
		/>
	);
};

export default Combobox;
