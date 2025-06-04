console.log('mediaEmbed.js loaded');

function initMediaEmbed() {
    // Elementos do DOM
    const mediaPlayer = document.getElementById('media-player');
    const playlistButton = document.getElementById('playlist-button');
    
    // Lista de playlists disponíveis
    const playlists = [
        {
            name: "Lofi Hip Hop",
            id: "37i9dQZF1E4w8aZIn0QO8X",
            type: "spotify"
        },
        {
            name: "Deep Focus",
            id: "37i9dQZF1DWZeKCadgRdKQ",
            type: "spotify"
        },
        {
            name: "Focus Flow",
            id: "37i9dQZF1DX8q1y0YdMDqP",
            type: "spotify"
        },
        {
            name: "Lofi Girl",
            id: "https://www.youtube.com/embed/jfKfPfyJRdk",
            type: "youtube"
        }
    ];
    
    // Playlist atual
    let currentPlaylistIndex = 0;
    
    // Carregar a última playlist utilizada
    function loadLastPlaylist() {
        const lastIndex = localStorage.getItem('lastPlaylistIndex');
        if (lastIndex !== null && !isNaN(lastIndex)) {
            currentPlaylistIndex = parseInt(lastIndex);
            if (currentPlaylistIndex >= playlists.length) {
                currentPlaylistIndex = 0;
            }
        }
        loadCurrentPlaylist();
    }
    
    // Salvar a playlist atual
    function saveCurrentPlaylist() {
        localStorage.setItem('lastPlaylistIndex', currentPlaylistIndex.toString());
    }
    
    // Carregar a playlist atual no player
    function loadCurrentPlaylist() {
        const playlist = playlists[currentPlaylistIndex];
        
        if (mediaPlayer) {
            // Limpar o player atual
            mediaPlayer.innerHTML = '';
            
            // Adicionar o embed apropriado com base no tipo
            if (playlist.type === "spotify") {
                mediaPlayer.innerHTML = `
                    <iframe src="https://open.spotify.com/embed/playlist/${playlist.id}" 
                            width="100%" 
                            height="200" 
                            frameBorder="0" 
                            allowtransparency="true" 
                            allow="encrypted-media">
                    </iframe>
                `;
            } else if (playlist.type === "youtube") {
                mediaPlayer.innerHTML = `
                    <iframe 
                        width="100%" 
                        height="200" 
                        src="${playlist.id}" 
                        title="YouTube video player" 
                        frameBorder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowFullScreen>
                    </iframe>
                `;
            }
        }
    }
    
    // Alternar para a próxima playlist
    function nextPlaylist() {
        currentPlaylistIndex = (currentPlaylistIndex + 1) % playlists.length;
        loadCurrentPlaylist();
        saveCurrentPlaylist();
        
        // Mostrar uma notificação temporária
        showNotification(`Playlist: ${playlists[currentPlaylistIndex].name}`);
    }
    
    // Mostrar uma notificação temporária
    function showNotification(message) {
        // Verificar se já existe uma notificação
        let notification = document.querySelector('.media-notification');
        
        // Se não existir, criar uma
        if (!notification) {
            notification = document.createElement('div');
            notification.className = 'media-notification';
            document.body.appendChild(notification);
        }
        
        // Atualizar a mensagem
        notification.textContent = message;
        notification.classList.add('show');
        
        // Remover a notificação após alguns segundos
        setTimeout(() => {
            notification.classList.remove('show');
        }, 3000);
    }
    
    // Configurar event listeners
    if (playlistButton) {
        playlistButton.addEventListener('click', nextPlaylist);
    }
    
    // Inicializar o player
    loadLastPlaylist();
}

// Auto-inicializar quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', initMediaEmbed);
// Ensure no extraneous HTML is included in this JavaScript file
