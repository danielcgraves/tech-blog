const newCommentHandler = async (event) => {
	event.preventDefault();

	const comment_text = document.querySelector('#comment-input').value.trim();

	const blog_id = window.location.toString().split('/')[
		window.location.toString().split('/').length - 1
	];

	if (comment_text) {
		console.log(comment_text);
		const response = await fetch(`/api/comments`, {
			method: 'POST',
			body: JSON.stringify({ blog_id, comment_text }),
			headers: { 'Content-Type': 'application/json' },
		});
		console.log(response);

		if (response.ok) {
			document.location.reload();
		} else {
			alert('Failed to create comment');
		}
	}
};

document
	.querySelector('#comment-form')
	.addEventListener('submit', newCommentHandler);
