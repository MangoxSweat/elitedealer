<script>
	let firstName = '';
	let lastName = '';
	let email = '';
	let phone = '';
	let message = '';

	function handleSubmit(event) {
		event.preventDefault();
		console.log({ firstName, lastName, email, phone, message });
	}
</script>

<h1>Drop us line!</h1>

<form on:submit={handleSubmit}>
	<div class="inline-fields">
		<div class="input-group">
			<label for="first">First Name:</label>
			<input id="first" name="first" type="text" bind:value={firstName} />
		</div>

		<div class="input-group">
			<label for="last">Last Name:</label>
			<input id="last" name="last" type="text" bind:value={lastName} />
		</div>
	</div>

	<div class="inline-fields">
		<div class="input-group">
			<label for="email">Email:</label>
			<input id="email" name="email" type="email" bind:value={email} />
		</div>

		<div class="input-group">
			<label for="phone">Phone:</label>
			<input id="phone" name="phone" type="number" bind:value={phone} />
		</div>
	</div>

	<div class="input-group" style="width:100%;">
		<label for="msg">Message</label>
		<textarea id="msg" name="msg" bind:value={message} rows="15"></textarea>
	</div>
	<button type="submit">Submit</button>
</form>

<style>
	h1 {
		color: #e4ae37;
	}
	form {
		display: flex;
		flex-direction: column;
		/*max-width: 400px;*/
		margin: auto;
		color: white;
	}

	.inline-fields {
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
	}

	.input-group {
		display: flex;
		flex-direction: column;
		width: 40%;
	}

	.inline-fields label,
	.inline-fields input {
	}

	label {
		margin-top: 10px;
	}

	input,
	textarea {
		margin-top: 5px;
		padding: 8px;
		font-size: 1em;
	}

	button {
		margin-top: 15px;
		padding: 10px;
		font-size: 1em;
		background-color: #e4ae37;
		color: white;
		border: none;
		cursor: pointer;
		width: 150px;
		height: 50px;
		border-radius: 15px;
	}

	button:hover {
		background-color: #0056b3;
	}

	@media (max-width: 600px) {
		.inline-fields {
			flex-direction: column;
		}
		.input-group {
			width: 100%;
		}
		h1,
		button {
			text-align: center;
			margin: 1em auto;
		}
	}
</style>
