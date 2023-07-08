window.addEventListener('DOMContentLoaded', () => {
    const textArray = [
        '“Nunca dejes de aprender, porque la vida nunca deja de enseñar”. 📚',
        '“La educación es el arma más poderosa que puedes usar para cambiar el mundo”. 🌎',
        '“El éxito es la suma de pequeños esfuerzos repetidos día tras día”. 💯',
        '“No hay sueños imposibles, solo hay personas incapaces de luchar por ellos”. 💪',
        '“La única forma de hacer un gran trabajo es amar lo que haces”. ❤️',
        '“El fracaso es solo la oportunidad de comenzar de nuevo de una forma más inteligente”. 🧠',
        '“La diferencia entre lo ordinario y lo extraordinario es ese pequeño extra”. ✨',
        '“No dejes que lo que no puedes hacer interfiera con lo que puedes hacer”. 🙌'

    ];

    const randomIndex = Math.floor(Math.random() * textArray.length);
    const randomText = textArray[randomIndex];

    const randomTextElement = document.getElementById('random-text');
    randomTextElement.textContent = randomText;
});
