tailwind.config = {
  theme: {
    extend: {
      colors: {
        "youtube-red": "#FF0000",
        "dark-red": "#CC0000",
        "light-red": "#FF5A5A",
      },
    },
  },
};

// Sample blog articles data
const articles = {
    article1: {
        title: "How to Download YouTube Videos in 4K Quality",
        category: "Tutorial",
        date: "June 15, 2023",
        image:
            "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
        content: `
                    <img src="https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80" 
                         alt="YouTube Downloading" class="w-full h-64 object-cover rounded-lg mb-6">
                    <span class="text-youtube-red text-sm font-medium">Tutorial</span>
                    <h1 class="text-3xl font-bold mt-2 mb-4">How to Download YouTube Videos in 4K Quality</h1>
                    <div class="flex items-center text-gray-500 mb-6">
                        <span>June 15, 2023</span>
                        <span class="mx-2">•</span>
                        <span>5 min read</span>
                    </div>
                    <div class="article-text">
                        <p class="mb-4">Downloading YouTube videos in 4K quality is easier than you think with QuickYTDownload. In this comprehensive guide, we'll walk you through the entire process step by step.</p>
                        
                        <h2 class="text-2xl font-bold mt-8 mb-4">Step 1: Copy the YouTube URL</h2>
                        <p class="mb-4">Navigate to the YouTube video you want to download and copy the URL from the address bar.</p>
                        
                        <h2 class="text-2xl font-bold mt-8 mb-4">Step 2: Paste the URL in QuickYTDownload</h2>
                        <p class="mb-4">Open QuickYTDownload and paste the copied URL into the input field. Our system will automatically analyze the video.</p>
                        
                        <h2 class="text-2xl font-bold mt-8 mb-4">Step 3: Select 4K Quality</h2>
                        <p class="mb-4">From the available format options, select the 4K (2160p) quality option. This will ensure you get the highest resolution possible.</p>
                        
                        <h2 class="text-2xl font-bold mt-8 mb-4">Step 4: Download and Enjoy</h2>
                        <p class="mb-4">Click the download button and wait for the process to complete. Once finished, your 4K video will be ready to watch offline!</p>
                        
                        <p class="mb-4 mt-8">Note: 4K videos have larger file sizes, so make sure you have sufficient storage space and a stable internet connection for downloading.</p>
                    </div>
                `,
    },
    article2: {
        title: "Best Video Formats for Different Devices",
        category: "Guide",
        date: "June 8, 2023",
        image:
            "https://images.unsplash.com/photo-1555099962-4199c345e5dd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
        content: `
                    <img src="https://images.unsplash.com/photo-1555099962-4199c345e5dd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80" 
                         alt="Video Formats" class="w-full h-64 object-cover rounded-lg mb-6">
                    <span class="text-youtube-red text-sm font-medium">Guide</span>
                    <h1 class="text-3xl font-bold mt-2 mb-4">Best Video Formats for Different Devices</h1>
                    <div class="flex items-center text-gray-500 mb-6">
                        <span>June 8, 2023</span>
                        <span class="mx-2">•</span>
                        <span>7 min read</span>
                    </div>
                    <div class="article-text">
                        <p class="mb-4">Choosing the right video format can significantly impact your viewing experience. Different devices support different formats, and selecting the optimal one ensures compatibility and the best quality playback.</p>
                        
                        <h2 class="text-2xl font-bold mt-8 mb-4">MP4 - The Universal Format</h2>
                        <p class="mb-4">MP4 is the most widely compatible video format, supported by virtually all devices and platforms. It offers a good balance between quality and file size, making it ideal for general use.</p>
                        
                        <h2 class="text-2xl font-bold mt-8 mb-4">MKV - For High-Quality Content</h2>
                        <p class="mb-4">MKV format supports high-quality video with multiple audio tracks and subtitles. It's perfect for movies and TV shows but may require additional codecs on some devices.</p>
                        
                        <h2 class="text-2xl font-bold mt-8 mb-4">WebM - For Web Applications</h2>
                        <p class="mb-4">WebM is an open-source format developed by Google. It provides high-quality video with efficient compression, making it ideal for web applications and streaming.</p>
                        
                        <h2 class="text-2xl font-bold mt-8 mb-4">Device-Specific Recommendations</h2>
                        <p class="mb-4"><strong>iOS Devices:</strong> MP4 with H.264 codec</p>
                        <p class="mb-4"><strong>Android Devices:</strong> MP4 or WebM</p>
                        <p class="mb-4"><strong>Smart TVs:</strong> MP4 or MKV</p>
                        <p class="mb-4"><strong>Gaming Consoles:</strong> MP4</p>
                        
                        <p class="mb-4 mt-8">QuickYTDownload supports all these formats and more, allowing you to choose the perfect format for your device.</p>
                    </div>
                `,
    },
    article3: {
        title: "How to Compress Videos Without Losing Quality",
        category: "Tips",
        date: "May 30, 2023",
        image:
            "https://images.unsplash.com/photo-1536240478700-b869070f9279?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
        content: `
                    <img src="https://images.unsplash.com/photo-1536240478700-b869070f9279?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80" 
                         alt="Video Compression" class="w-full h-64 object-cover rounded-lg mb-6">
                    <span class="text-youtube-red text-sm font-medium">Tips</span>
                    <h1 class="text-3xl font-bold mt-2 mb-4">How to Compress Videos Without Losing Quality</h1>
                    <div class="flex items-center text-gray-500 mb-6">
                        <span>May 30, 2023</span>
                        <span class="mx-2">•</span>
                        <span>6 min read</span>
                    </div>
                    <div class="article-text">
                        <p class="mb-4">Video files can take up significant storage space on your devices. Learning how to compress them effectively without noticeable quality loss is essential for managing your media library.</p>
                        
                        <h2 class="text-2xl font-bold mt-8 mb-4">Choose the Right Codec</h2>
                        <p class="mb-4">Modern codecs like H.265 (HEVC) offer significantly better compression than older codecs like H.264 while maintaining similar quality. Always opt for the latest codecs when possible.</p>
                        
                        <h2 class="text-2xl font-bold mt-8 mb-4">Adjust Bitrate Appropriately</h2>
                        <p class="mb-4">Bitrate determines the amount of data processed per second of video. Higher bitrates mean better quality but larger files. For 1080p video, a bitrate of 8-12 Mbps often provides excellent quality with reasonable file size.</p>
                        
                        <h2 class="text-2xl font-bold mt-8 mb-4">Use Variable Bitrate (VBR)</h2>
                        <p class="mb-4">Variable Bitrate encoding allocates more data to complex scenes and less to simpler ones, resulting in better quality at smaller file sizes compared to Constant Bitrate (CBR).</p>
                        
                        <h2 class="text-2xl font-bold mt-8 mb-4">Resize Resolution When Appropriate</h2>
                        <p class="mb-4">If you're watching videos on mobile devices, consider downsizing from 4K to 1080p. The difference is hardly noticeable on smaller screens, but file size reduces significantly.</p>
                        
                        <h2 class="text-2xl font-bold mt-8 mb-4">QuickYTDownload Compression Features</h2>
                        <p class="mb-4">Our tool offers built-in compression options that let you balance quality and file size according to your needs. You can choose from preset profiles or customize your own compression settings.</p>
                        
                        <p class="mb-4 mt-8">With these techniques, you can save storage space while maintaining excellent video quality for your downloaded content.</p>
                    </div>
                `,
    },
    article4: {
        title: "Instagram's New Algorithm Changes: What Content Creators Need to Know",
        category: "Tips",
        date: "September 10, 2025",
        image:
            "https://www.pexels.com/photo/person-holding-iphone-showing-social-networks-folder-607812/",
        content: `
                    <img src="https://www.pexels.com/photo/social-media-in-smartphone-16852355/" 
                         alt="Video Compression" class="w-full h-64 object-cover rounded-lg mb-6">
                    <span class="text-youtube-red text-sm font-medium">Tips</span>
                    <h1 class="text-3xl font-bold mt-2 mb-4">Instagram's New Algorithm Changes: What Content Creators Need to Know</h1>
                    <div class="flex items-center text-gray-500 mb-6">
                        <span>September 10, 2025</span>
                        <span class="mx-2">•</span>
                        <span>6 min read</span>
                    </div>
                    <div class="article-text">
                        <p class="mb-4">Instagram has rolled out significant algorithm updates in 2024 that are changing how content is distributed and discovered. Understanding these changes is crucial for content creators looking to maintain or grow their presence on the platform.</p>
                        
                        <h2 class="text-2xl font-bold mt-8 mb-4">Emphasis on Original Content</h2>
                        <p class="mb-4">The algorithm now prioritizes original content over reposted material. Instagram is actively demoting accounts that primarily share content created by others, even with proper credit.</p>
                        
                        <h2 class="text-2xl font-bold mt-8 mb-4">Longer Video Content Rewarded</h2>
                        <p class="mb-4">While Reels remain important, Instagram is now favoring longer-form video content (3-10 minutes) that keeps users engaged for longer periods. Watch time has become a more significant ranking factor.</p>
                        
                        <h2 class="text-2xl font-bold mt-8 mb-4">Niche Community Focus</h2>
                        <p class="mb-4">The algorithm is becoming better at identifying and promoting content to niche communities. Accounts that serve specific interests are seeing increased reach within their target audiences.</p>
                        
                        <h2 class="text-2xl font-bold mt-8 mb-4">Authentic Engagement Matters More</h2>
                        <p class="mb-4">Meaningful comments and shares now carry more weight than simple likes. The algorithm can detect genuine engagement versus automated or low-effort interactions.</p>
                        
                        <h2 class="text-2xl font-bold mt-8 mb-4">Consistency Over Frequency</h2>
                        <p class="mb-4">While regular posting remains important, the algorithm now values consistent quality over daily posting. Accounts that maintain high-quality standards are being rewarded even with less frequent posting schedules.</p>
                        
                        <p class="mb-4 mt-8">Adapting to these algorithm changes requires focusing on creating original, valuable content that genuinely engages your specific audience rather than chasing viral trends.</p>
                    </div>
                `,
    },
    article5: {
    title: "Instagram's New Algorithm Changes: What Content Creators Need to Know",
    category: "Tips",
    date: "September 10, 2025",
    image: "https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg",
    content: `
        <div class="relative group perspective">
            <!-- 3D Card -->
            <div class="transform-style-preserve-3d transition-transform duration-700 group-hover:rotate-y-6 bg-white shadow-xl rounded-2xl p-6">
                
                <img src="https://images.pexels.com/photos/16852355/pexels-photo-16852355.jpeg"
                     alt="Instagram Algorithm"
                     class="w-full h-64 object-cover rounded-xl mb-6 shadow-md">

                <span class="inline-block bg-pink-500 text-white text-xs px-3 py-1 rounded-full shadow-md">Tips</span>
                <h1 class="text-3xl font-bold mt-4 mb-4">Instagram's New Algorithm Changes: What Content Creators Need to Know</h1>
                
                <div class="flex items-center text-gray-500 text-sm mb-6">
                    <span>September 10, 2025</span>
                    <span class="mx-2">•</span>
                    <span>6 min read</span>
                </div>

                <div class="space-y-5 text-gray-700 leading-relaxed">
                    <p>Instagram has rolled out significant algorithm updates in 2024 that are changing how content is distributed and discovered. Understanding these changes is crucial for creators aiming to grow their presence.</p>
                    
                    <h2 class="text-xl font-semibold">✨ Emphasis on Original Content</h2>
                    <p>The algorithm now prioritizes original posts. Reposting content may limit reach, even with credits.</p>
                    
                    <h2 class="text-xl font-semibold">🎥 Longer Videos Rewarded</h2>
                    <p>Instagram now favors 3–10 min videos with strong watch time over short clips.</p>
                    
                    <h2 class="text-xl font-semibold">🎯 Niche Community Focus</h2>
                    <p>Content for specific communities is being boosted, helping creators reach their exact audience.</p>
                    
                    <h2 class="text-xl font-semibold">💬 Authentic Engagement</h2>
                    <p>Comments & shares matter more than likes. Genuine engagement boosts ranking.</p>
                    
                    <h2 class="text-xl font-semibold">📅 Consistency Over Frequency</h2>
                    <p>Quality > quantity. Fewer high-value posts perform better than daily low-effort uploads.</p>
                </div>

                <p class="mt-6 font-medium text-pink-600">Adapt your strategy by focusing on originality, engagement, and niche value 🚀</p>
            </div>
        </div>
    `,
    },
    article6: {
    title: "How to Create 3D Models Using AI",
    category: "Tips",
    date: "September 14, 2025",
    image:
        "https://images.pexels.com/photos/5865703/pexels-photo-5865703.jpeg",
    content: `
        <img src="https://images.pexels.com/photos/5865704/pexels-photo-5865704.jpeg" 
             alt="AI 3D Modeling" class="w-full h-64 object-cover rounded-lg mb-6">
        <span class="text-youtube-red text-sm font-medium">Tips</span>
        <h1 class="text-3xl font-bold mt-2 mb-4">How to Create 3D Models Using AI</h1>
        <div class="flex items-center text-gray-500 mb-6">
            <span>September 14, 2025</span>
            <span class="mx-2">•</span>
            <span>7 min read</span>
        </div>
        <div class="article-text">
            <p class="mb-4">Artificial Intelligence is revolutionizing the way 3D models are created. Instead of spending hours designing every detail manually, creators can now use AI-powered tools to generate realistic 3D objects, characters, and environments in just minutes.</p>
            
            <h2 class="text-2xl font-bold mt-8 mb-4">AI-Powered 3D Modeling Tools</h2>
            <p class="mb-4">Several platforms like Blender with AI add-ons, NVIDIA Omniverse, and generative AI tools such as Meshy or OpenAI’s Shap-E allow users to create 3D assets from text prompts or reference images.</p>
            
            <h2 class="text-2xl font-bold mt-8 mb-4">Text-to-3D Generation</h2>
            <p class="mb-4">With text-to-3D, you simply describe the object you want—for example, “a futuristic chair with neon lights”—and the AI generates a 3D model that you can refine further in traditional design software.</p>
            
            <h2 class="text-2xl font-bold mt-8 mb-4">Image-to-3D Conversion</h2>
            <p class="mb-4">AI can also turn 2D images into 3D models. By analyzing depth, texture, and structure, tools can transform flat images into fully interactive 3D assets.</p>
            
            <h2 class="text-2xl font-bold mt-8 mb-4">Faster Prototyping for Creators</h2>
            <p class="mb-4">AI dramatically reduces the time needed for prototyping. Game developers, product designers, and architects can generate multiple 3D versions of an idea quickly before moving into detailed editing.</p>
            
            <h2 class="text-2xl font-bold mt-8 mb-4">Future of AI in 3D Design</h2>
            <p class="mb-4">As AI models improve, we’ll see more realistic textures, physics-based interactions, and even AI-driven animations. This means anyone—even without advanced 3D skills—can create professional-level models.</p>
            
            <p class="mb-4 mt-8">To start creating 3D models with AI, experiment with text-to-3D platforms, refine them in Blender or Maya, and integrate them into your creative projects. The future of 3D design is faster, smarter, and more accessible thanks to AI.</p>
        </div>
    `,
},

};

// Function to show article content
function showArticle(articleId) {
  const article = articles[articleId];
  if (!article) return;

  // Update URL with article slug
  const slug = articleId;
  window.history.pushState(null, null, `#${slug}`);

  // Update page title
  document.title = `${article.title} - QuickYTDownload Blog`;

  // Hide blog list and show article content
  document.getElementById("blog-list-section").style.display = "none";
  document.getElementById("article-content").style.display = "block";

  // Populate article content
  document.getElementById("article-container").innerHTML = article.content;

  // Update share URL
  const currentUrl = window.location.href;
  document.getElementById("link-text").textContent = currentUrl;

  // Set up WhatsApp share button
  const whatsappBtn = document.getElementById("whatsapp-share");
  const shareText = `Check out this article: ${article.title}`;
  whatsappBtn.href = `https://wa.me/?text=${encodeURIComponent(
    shareText + " " + currentUrl
  )}`;

  // Scroll to top
  window.scrollTo(0, 0);
}

// Function to hide article and show blog list
function hideArticle() {
  // Reset URL
  window.history.pushState(null, null, window.location.pathname);

  // Reset page title
  document.title = "QuickYTDownload Blog";

  // Show blog list and hide article content
  document.getElementById("blog-list-section").style.display = "block";
  document.getElementById("article-content").style.display = "none";

  // Scroll to top
  window.scrollTo(0, 0);
}

// Function to copy article link to clipboard
function copyLink() {
  const linkText = document.getElementById("link-text").textContent;
  navigator.clipboard.writeText(linkText).then(() => {
    alert("Link copied to clipboard!");
  });
}

// Check URL on page load for direct article access
window.addEventListener("load", () => {
  const hash = window.location.hash.substring(1);
  if (hash && articles[hash]) {
    showArticle(hash);
  }
});

// Handle browser back button
window.addEventListener("popstate", () => {
  const hash = window.location.hash.substring(1);
  if (hash && articles[hash]) {
    showArticle(hash);
  } else {
    hideArticle();
  }
});
