// Mobile menu toggle
document
  .getElementById("mobile-menu-button")
  .addEventListener("click", function () {
    const menu = document.getElementById("mobile-menu");
    menu.classList.toggle("hidden");
    this.setAttribute(
      "aria-expanded",
      menu.classList.contains("hidden") ? "false" : "true"
    );
  });

// Extract YouTube video ID from URL
function extractVideoId(url) {
  const regExp =
    /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
  const match = url.match(regExp);
  return match && match[7].length === 11 ? match[7] : null;
}

// Format duration in seconds to HH:MM:SS
function formatDuration(seconds) {
  const h = Math.floor(seconds / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = Math.floor((seconds % 3600) % 60);

  return [h, h > 0 && m < 10 ? "0" + m : m, h > 0 && s < 10 ? "0" + s : s]
    .filter(Boolean)
    .join(":");
}

// Format number with commas
function formatNumber(num) {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

// Toggle loading state on fetch button
function setLoadingState(isLoading) {
  const btn = document.getElementById("fetch-btn");
  const text = document.getElementById("fetch-btn-text");
  const spinner = document.getElementById("fetch-btn-spinner");

  if (isLoading) {
    btn.disabled = true;
    text.textContent = "Fetching...";
    spinner.classList.remove("hidden");
  } else {
    btn.disabled = false;
    text.textContent = "Get Download Options";
    spinner.classList.add("hidden");
  }
}

// Show error message
function showError(message) {
  alert("Error: " + message);
}

// Generate a random file size for demo purposes
function generateFileSize(minMB, maxMB) {
  const size = Math.floor(Math.random() * (maxMB - minMB + 1)) + minMB;
  let displaySize;

  if (size < 10) {
    displaySize = size.toFixed(2);
  } else if (size < 100) {
    displaySize = size.toFixed(1);
  } else {
    displaySize = Math.round(size);
  }

  return displaySize + " MB";
}

// Render video info
function renderVideoInfo(videoInfo) {
  document.getElementById("video-title").textContent = videoInfo.title;
  document.getElementById("video-duration").querySelector("span").textContent =
    formatDuration(videoInfo.duration);
  document.getElementById("video-views").querySelector("span").textContent =
    formatNumber(videoInfo.views) + " views";
  document.getElementById("video-channel").querySelector("span").textContent =
    videoInfo.channel;
  document.getElementById("video-thumbnail").src = videoInfo.thumbnail;
  document.getElementById("video-thumbnail").alt = videoInfo.title;
  document.getElementById("video-info").classList.remove("hidden");
}

// Render MP4 download options
function renderMp4Options(formats) {
  const container = document.getElementById("mp4-options");
  container.innerHTML = "";

  formats.forEach((format) => {
    const row = document.createElement("tr");
    row.className = "hover:bg-gray-50";
    row.innerHTML = `
                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">${
                      format.quality
                    }</td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${generateFileSize(
                      5,
                      300
                    )}</td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${
                      format.fps
                    }</td>
                    <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <button class="download-btn inline-flex items-center px-3 py-1 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-red-600 hover:bg-red-700"
                            data-itag="${format.itag}" 
                            data-type="video">
                        <i class="fas fa-download mr-1"></i> Download
                    </button>
                `;
    container.appendChild(row);
  });
}

// Render MP3 download options
function renderMp3Options(formats) {
  const container = document.getElementById("mp3-options");
  container.innerHTML = "";

  formats.forEach((format) => {
    const row = document.createElement("tr");
    row.className = "hover:bg-gray-50";
    row.innerHTML = `
                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">${
                      format.quality
                    }</td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${generateFileSize(
                      2,
                      10
                    )}</td>
                    <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <button class="download-btn inline-flex items-center px-3 py-1 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-red-600 hover:bg-red-700"
                            data-itag="${format.itag}" 
                            data-type="video">
                        <i class="fas fa-download mr-1"></i> Download
                    </button>
                    </td>
                `;
    container.appendChild(row);
  });
}

// Render other format options
function renderOtherOptions(formats) {
  const container = document.getElementById("other-options");
  container.innerHTML = "";

  formats.forEach((format) => {
    const row = document.createElement("tr");
    row.className = "hover:bg-gray-50";
    row.innerHTML = `
                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">${
                      format.format
                    }</td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${
                      format.quality
                    }</td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${generateFileSize(
                      1,
                      50
                    )}</td>
                    <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <button class="download-btn inline-flex items-center px-3 py-1 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-red-600 hover:bg-red-700"
                            data-itag="${format.itag}" 
                            data-type="video">
                        <i class="fas fa-download mr-1"></i> Download
                    </button>
                    </td>
                `;
    container.appendChild(row);
  });
}

// Handle paste button click
document
  .getElementById("paste-btn")
  .addEventListener("click", async function () {
    try {
      const text = await navigator.clipboard.readText();
      if (text) {
        document.getElementById("youtube-url").value = text;
      }
    } catch (err) {
      console.error("Failed to read clipboard contents: ", err);
      showError("Unable to paste from clipboard. Please paste manually.");
    }
  });

// Handle fetch button click
document.getElementById("fetch-btn").addEventListener("click", function () {
  const url = document.getElementById("youtube-url").value.trim();
  const videoId = extractVideoId(url);

  if (!videoId) {
    showError("Please enter a valid YouTube video URL");
    return;
  }

  setLoadingState(true);

  // Simulate API call with mock data
  setTimeout(() => {
    // Mock video info
    const mockVideoInfo = {
      id: videoId,
      title: `Example YouTube Video (${videoId})`,
      duration: 354, // in seconds
      views: 1234567,
      channel: "Sample Channel",
      thumbnail: `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`,
    };

    // Mock MP4 formats
    const mockMp4Formats = [
      { quality: "720p", fps: "30" },
      { quality: "1080p", fps: "30" },
      { quality: "1440p", fps: "30" },
      { quality: "2160p (4K)", fps: "60" },
    ];

    // Mock MP3 formats
    const mockMp3Formats = [
      { quality: "128 kbps" },
      { quality: "192 kbps" },
      { quality: "320 kbps" },
    ];

    // Mock other formats
    const mockOtherFormats = [
      { format: "WEBM", quality: "720p" },
      { format: "3GP", quality: "320p" },
      { format: "M4A", quality: "128 kbps" },
    ];

    renderVideoInfo(mockVideoInfo);
    renderMp4Options(mockMp4Formats);
    renderMp3Options(mockMp3Formats);
    renderOtherOptions(mockOtherFormats);

    document.getElementById("download-options").classList.remove("hidden");
    setLoadingState(false);
  }, 1500);
});

// Handle download button clicks (event delegation)
document.addEventListener("click", function (e) {
  if (e.target.classList.contains("download-btn")) {
    const type = e.target.getAttribute("data-type");
    const quality = e.target.getAttribute("data-quality");
    const videoId = extractVideoId(
      document.getElementById("youtube-url").value.trim()
    );

    if (videoId) {
      alert(
        `In a real implementation, this would download the ${quality} ${type.toUpperCase()} version of video ID: ${videoId}\n\nFor now, please use an actual YouTube downloader service.`
      );
    }
  }
});
