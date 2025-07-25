'use client'

import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { UserModalComponent } from '@/utils/project-types';

const style = {
	position: 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: 400,
	bgcolor: 'background.paper',
	border: '2px solid #000',
	boxShadow: 24,
	p: 4,
};

export default function UserModal({ data, open, setOpen }: UserModalComponent) {
	const handleClose = () => setOpen();

	return (
		<Modal
			open={open}
			onClose={handleClose}
			aria-labelledby="modal-modal-title"
			aria-describedby="modal-modal-description"
		>
			<Box sx={style}>
				<Typography id="modal-modal-title" variant="h6" component="h2">
					User
				</Typography>
				<Typography id="modal-modal-description" sx={{ mt: 2 }}>
					{`Username: ${data.username}`}
				</Typography>
				<Typography id="modal-modal-description" sx={{ mt: 2 }}>
					{`Name: ${data.name.firstname + " " + data.name.lastname}`}
				</Typography>
				<Typography id="modal-modal-description" sx={{ mt: 2 }}>
					{`Email: ${data.email}`}
				</Typography>
				<Typography id="modal-modal-description" sx={{ mt: 2 }}>
					{`Password: ${data.password}`}
				</Typography>
			</Box>
		</Modal >
	);
}
