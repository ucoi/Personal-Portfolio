# 🚀 Deploy to GitHub Pages - Step by Step Guide

## ✅ Step 1: Create a GitHub Repository (Complete this on GitHub.com)

1. Go to [GitHub.com](https://github.com) and sign in
2. Click the **"+"** icon in the top right corner
3. Select **"New repository"**
4. **Repository name**: Choose a name (e.g., `portfolio-website` or `ahmedhisham.github.io`)
   - If you name it `ahmedhisham.github.io`, your site will be at: `https://ahmedhisham.github.io/`
   - If you name it something else (e.g., `portfolio`), your site will be at: `https://ahmedhisham.github.io/portfolio/`
5. Make it **Public**
6. **DO NOT** check "Add a README file"
7. Click **"Create repository"**

## ✅ Step 2: Copy the Commands Below

After creating the repository, GitHub will show you some commands. **Copy your repository URL** from GitHub.

It will look like:

```
https://github.com/ahmedhisham/YOUR-REPO-NAME.git
```

## ✅ Step 3: Push Your Code to GitHub

Open your terminal and run these commands **one by one** (replace `YOUR-REPO-NAME` with your actual repository name):

```bash
# Add your GitHub repository as remote
git remote add origin https://github.com/ahmedhisham/YOUR-REPO-NAME.git

# Push your code to GitHub
git push -u origin main
```

**Example:**

```bash
git remote add origin https://github.com/ahmedhisham/portfolio-website.git
git push -u origin main
```

## ✅ Step 4: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click on **"Settings"** tab (top right)
3. Scroll down and click **"Pages"** in the left sidebar
4. Under **"Source"**:
   - Select **"Deploy from a branch"**
   - Choose **"main"** branch
   - Select **"/ (root)"** folder
5. Click **"Save"**

## ✅ Step 5: Wait and Access Your Website

- GitHub Pages will take 1-3 minutes to deploy
- Your site will be live at:
  - `https://ahmedhisham.github.io/YOUR-REPO-NAME/`
  - OR `https://ahmedhisham.github.io/` (if you named it `ahmedhisham.github.io`)

## 🔄 Making Updates Later

Whenever you make changes to your portfolio:

```bash
# Add all changes
git add .

# Commit your changes
git commit -m "Updated portfolio content"

# Push to GitHub
git push origin main
```

Your GitHub Pages site will automatically update in 1-2 minutes!

## 📝 Current Git Status

✅ Git repository initialized
✅ All files committed
✅ Ready to push to GitHub

## ⚠️ Common Issues & Solutions

### Issue: "remote origin already exists"

**Solution:**

```bash
git remote remove origin
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO-NAME.git
```

### Issue: "Permission denied"

**Solution:** You need to authenticate with GitHub. Use:

- GitHub Personal Access Token, OR
- SSH key

### Issue: Page not showing correctly

**Solution:**

- Make sure `index.html` is in the root folder
- Wait 2-3 minutes after pushing
- Clear your browser cache

## 🎉 You're Done!

Once deployed, share your portfolio:

- LinkedIn
- Resume
- Email signature
- Social media

---

**Need help?** Check the [GitHub Pages Documentation](https://docs.github.com/en/pages)
