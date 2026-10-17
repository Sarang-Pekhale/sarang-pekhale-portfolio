# Sarang Pekhale — GitHub editing and publishing guide

Prepared 17 October 2026 for [Sarang-Pekhale/sarang-pekhale-portfolio](https://github.com/Sarang-Pekhale/sarang-pekhale-portfolio).

The repository exists as a private repository. Keep it private while you finish your changes and add your resume. This guide explains the prepared source layout and the steps you can take later to publish; it does not confirm that an upload or deployment has completed.

The website consists of static HTML, CSS, JavaScript, and local assets. Its website root is **`dist/`**. It does not require Node.js, npm, a database, or a build command. The GitHub Pages workflow publishes the contents of `dist/`.

## 1. Prepare privately

1. Open the repository and confirm that its name has the **Private** label.
2. After the initial source upload, check the **Code** tab for `dist/index.html`, `dist/content.js`, `dist/styles.css`, `README.md`, and `.github/workflows/pages.yml`.
3. Make your remaining changes using the file map below.
4. Add your resume PDF as described in section 3.
5. Preview the site locally and check its pages and links.
6. Leave **Settings → Pages** unconfigured until you are ready to publish. Do not run the deployment workflow yet.

The workflow named **Deploy portfolio to GitHub Pages** uses a manual `workflow_dispatch` trigger. A commit saves files in the repository; it does not publish the website automatically with this configuration.

The existing ChatGPT Sites website and this GitHub repository are separate copies. Editing one does not automatically update the other. Once you use this repository for GitHub Pages, use it as the source for subsequent GitHub Pages changes.

## 2. Edit your website on GitHub

### Make a small change

1. Open the repository's **Code** tab and select branch **main**.
2. Open the relevant file from the table below.
3. Click the pencil icon, **Edit this file**.
4. Change the text or code, keeping the surrounding HTML tags, JavaScript quotes and commas, or CSS braces intact.
5. Review the changes, then click **Commit changes**.
6. Enter a descriptive message, for example `Update PhD education details`.
7. For a small change in your own unprotected repository, you can commit directly to **main**. For a larger change, choose a new branch, open a pull request, review it, and merge it into **main**.
8. While the site is unpublished, your work is finished. After you enable publishing, run the manual deployment workflow when you want the change to become public.

GitHub's file preview helps review file contents; it is not a complete rendered preview of this website. Use the local preview in section 4 to inspect the design.

### Which file controls each part?

| What you want to change | File | Where to edit |
| --- | --- | --- |
| Full name in the hero, navigation brand, page titles, and copyright | `dist/content.js` | `fullName`. Also update the corresponding HTML text and page metadata for the static fallback. |
| Hero subtitle and institutional links | `dist/index.html` | The `.about-intro` section, including the paragraph below your name. |
| About Me biography and its descriptive heading | `dist/index.html` | The `.about-details` section and its `.about-copy` content. |
| Email shown inside About Me | `dist/content.js` | `email`; also update the fallback `.email-link` in `dist/index.html`. |
| Lab/profile links beside the About Me email | `dist/content.js` | The `profiles` array. |
| Experience roles, dates, employers, and project description | `dist/index.html` | The section with `id="experience"`; edit the `.experience-card` elements. |
| Education degrees, institutions, dates, and thesis details | `dist/index.html` | The section with `id="education"`; edit the `.education-card` elements. |
| Closing invitation, office address, and five contact destinations | `dist/index.html` | `.closing-contact`, `.closing-invitation`, `.closing-address`, and `.contact-icons`. |
| Research topics, descriptions, and links | `dist/content.js` | The `projects` array; keep the fallback entries in `dist/research/index.html` consistent. |
| Research page's introductory subtitle | `dist/research/index.html` | The `.post-header` description. |
| Publications and their BibTeX/PDF links | `dist/content.js` | The `publications` array; also update `dist/publications/index.html` and relevant `.bib` files for the static fallback. |
| Google Scholar link at the top of Publications | `dist/publications/index.html` | The link inside `.post-header`. |
| Resume PDF | `dist/assets/sarang-pekhale-cv.pdf` | Upload or replace this file. |
| Resume filename | `dist/content.js` | `cvUrl`. |
| Portrait image | `dist/content.js` | `portraitUrl`; update the fallback `<img id="about-photo">` in `dist/index.html` if its filename or dimensions change. |
| Colours, fonts, spacing, background framing, and card appearance | `dist/styles.css` | The selectors for the relevant section. |
| Hero/menu fade, mobile navigation, publication interactions | `dist/app.js` | The relevant interaction code; routine text changes do not require this file. |
| Experience route and house avoidance | `dist/journey.js` | The geometry of the dotted route and the decorative positions. |
| Resume validation and redirect | `dist/resume.js` | Normally leave this unchanged. |
| Navigation labels and destinations | `dist/index.html`, `dist/research/index.html`, `dist/publications/index.html` | Update `.main-nav` consistently on all three pages. |
| Browser icon | `dist/assets/favicon.svg` | Replace or edit the SVG. |
| Deployment configuration | `.github/workflows/pages.yml` | The trigger, workflow name, and uploaded `dist` directory. |
| Retained Wada artwork for a future photography section | `dist/assets/wada-*`, `design-archive/WADA-PHOTOGRAPHY.md`, `WADA-FRAME-NOTES.md` | The artwork is retained but is not displayed by the current homepage. |

**Experience, Education, and the closing contact section are written directly in `dist/index.html`.** The `education`, `teaching`, `awards`, and `talks` fields retained in `content.js` do not control the current photographic Education cards or the PDF Resume page.

The About Me email and the closing contact icons are independent. At preparation time, `content.js` contains `sarang.manoj.pekhale@am.iitd.ac.in`, while the closing icons use `amz248506@iitd.ac.in` and `sarang25pekhale@gmail.com`. If you want a destination changed, edit its actual location. For an icon, update its `href`, `aria-label`, and `title` together so the link and its accessible description agree.

### Change photographs

The simplest replacement is to upload the new image using the same filename. If you choose a new filename, update every reference to it.

| Visible photograph | Current repository file | Framing/configuration |
| --- | --- | --- |
| Opening sunrise | `dist/assets/arai-sunrise.jpeg` | `.about-intro` in `styles.css`; also update the preload in `index.html` if renamed. |
| About Me leafy background | `dist/assets/about-leaves.jpeg` | `.about-details` in `styles.css`. |
| Your portrait | `dist/assets/sarang-portrait.jpeg` | `portraitUrl` in `content.js` and fallback image in `index.html`. |
| Experience landscape | `dist/assets/experience-landscape.jpeg` | `.experience-section` in `styles.css`; `journey.js` aligns the route with this photograph. |
| Education rocks | `dist/assets/education-rocks.jpeg` | `.education-section` in `styles.css`. |
| Contact/copyright background | `dist/assets/contact-table.jpeg` | `.contact-ending` in `styles.css`. |

Backgrounds use `cover`, so their edges crop differently on wide and narrow screens. Adjust `background-position` to change the visible region. The portrait uses its natural aspect ratio. Replacing the Experience photograph may also require changing the route geometry, because it currently avoids the house in the existing image.

### Add a research project or publication

For a research entry, copy an existing object inside `projects` in `dist/content.js`. Give it a unique `id`, then edit `category`, `academicTitle`, `summary`, `detail`, `question`, `tags`, and `links`. The displayed research heading uses `academicTitle` when present, otherwise `title`. Separate neighbouring objects with commas. Update the static fallback in `dist/research/index.html` too.

For a publication, copy an existing object inside `publications` and update its unique `id`, title, ordered `authors` array, year, type, abbreviation, venue, PDF `url`, and `bibtex`. The page groups entries by year automatically. `selected: false` keeps it off the homepage; `selected: true` includes it in Selected publications. Add `codeUrl` or `websiteUrl` only if those destinations exist. Keep the fallback HTML in `dist/publications/index.html` and the downloadable citation under `dist/assets/publications/` consistent. The current `.bib` file is `pekhale2026mage.bib`.

`content.js` is JavaScript, not a form. Preserve string delimiters, brackets, and commas. For apostrophes inside a single-quoted string, escape them or use a double-quoted string. A syntax error can stop the dynamic content from updating.

### Keep links compatible with GitHub Pages

In `content.js`, use website-relative paths such as `./assets/example.pdf`. Do not include `dist/` in a public URL. Avoid `/assets/example.pdf`, which starts at the domain root and can break under the repository's `/sarang-pekhale-portfolio/` address.

In the homepage HTML, assets use `./assets/...`. In nested Research and Publications HTML, they use `../assets/...`. Keep that distinction when editing HTML. Use complete `https://...` URLs for external profiles or papers.

## 3. Upload or replace your resume

No resume PDF is included in the prepared source. The Resume route deliberately remains blank until a valid configured PDF is available.

1. Export your final resume as a real PDF.
2. Rename it exactly **`sarang-pekhale-cv.pdf`**.
3. In the repository, open **dist → assets** on branch **main**.
4. Choose **Add file → Upload files** and select the PDF.
5. Check the upload destination, enter a message such as `Add resume PDF`, and commit.
6. Confirm the repository contains **`dist/assets/sarang-pekhale-cv.pdf`**.
7. Preview locally, or deploy when you are ready. Click **Resume** and confirm it opens your PDF in the same tab.

The site already contains this setting in `dist/content.js`:

```js
cvUrl: './assets/sarang-pekhale-cv.pdf',
```

No code change is needed when you use that filename. If you choose another filename, change `cvUrl` as well. Match letter case exactly. An image renamed with a `.pdf` extension will not work: the Resume script checks for PDF content.

For an updated resume, upload the replacement under the same filename and commit it. If the website is already published, run the manual Pages workflow again. The GitHub web uploader permits files up to 25 MiB each and up to 100 files per upload.

## 4. Preview and edit on your computer

### Download a working copy

Open **Code → Download ZIP**, extract the archive, and open the extracted repository folder in a text editor such as VS Code. This folder must contain `dist/` and `README.md` directly. Download ZIP gives you a copy for editing; saving files on your computer does not upload them back to GitHub.

Open a terminal in that repository folder. If Python is installed, run:

```bash
python -m http.server 8000 --directory dist
```

On Windows, if the Python launcher is available, you can use:

```powershell
py -m http.server 8000 --directory dist
```

Open [http://localhost:8000/](http://localhost:8000/) in your browser. Keep the terminal running. Save a file and refresh the browser to see your changes. Stop the server with **Ctrl+C**.

Use this local HTTP server for previewing. Double-clicking `index.html` does not provide the HTTP environment required by the Resume PDF check.

Check the homepage at desktop and narrow widths, then Research, Publications, the Bibtex control, external links, contact destinations, and Resume. Check the Experience route after changing its photo or card sizes.

### Option A: Upload edited files through GitHub

Open the matching folder on GitHub and choose **Add file → Upload files**. Upload only the files you changed, preserving their paths. For example, upload an edited `styles.css` while viewing `dist/`, and upload a resume while viewing `dist/assets/`. Commit the changes. Do not upload the ZIP as the website or add an extra enclosing repository folder.

### Option B: Use GitHub Desktop

If you prefer a graphical Git workflow, sign into GitHub Desktop with your normal account and clone `Sarang-Pekhale/sarang-pekhale-portfolio`. Edit the cloned files, preview them using the Python command above, review the changed files in Desktop, commit to your working branch, and push. Fetch/pull before starting another editing session so your local copy includes changes made on GitHub. If using a feature branch, merge it into `main` before deployment.

### Option C: Use Git commands

If you already use Git, clone the repository once:

```bash
git clone https://github.com/Sarang-Pekhale/sarang-pekhale-portfolio.git
cd sarang-pekhale-portfolio
```

Before a later editing session, fetch the latest changes on a clean working branch:

```bash
git pull --ff-only
```

After editing and previewing, review and stage the intended files. For example:

```bash
git status
git diff
git add dist/index.html dist/content.js dist/styles.css
git commit -m "Update portfolio content"
git push origin main
```

Change the `git add` paths to the files you actually edited. For a resume-only update, stage `dist/assets/sarang-pekhale-cv.pdf`. Use your normal GitHub authentication; do not put tokens in site files or commit messages. Pushing saves source changes; the manual deployment is a separate step.

## 5. Publish publicly when you are ready

### Choose whether the source code will also be public

| Your choice | What GitHub requires | What visitors can see |
| --- | --- | --- |
| Public repository and public website | GitHub Free supports this | The website and the source repository. |
| Private personal repository and public website | GitHub Pro, or another eligible plan | The website; repository access remains restricted. |

For a personal account, publishing from a private repository does **not** make the website private. If you want to use GitHub Free for this project, make the repository public when you are ready, then enable Pages. Changing repository visibility alone does not configure Pages.

### A. Make the repository public

Skip this subsection if you have an eligible plan and want the source repository to remain private.

1. Open [your portfolio repository](https://github.com/Sarang-Pekhale/sarang-pekhale-portfolio).
2. Select **Settings** and stay on **General**.
3. Scroll to **Danger Zone**.
4. At **Change repository visibility**, click **Change visibility**.
5. Select **Public**.
6. Follow GitHub's confirmation prompts for this repository, acknowledge the effects, and choose **Make this repository public**.
7. Return to **Code** and confirm the label is **Public**.

This exposes the repository's code and history; Actions history and logs also become public. Make this change only when that is what you intend.

### B. Select GitHub Actions as the publishing source

1. Open **Settings → Pages**.
2. Under **Build and deployment → Source**, select **GitHub Actions**.
3. Keep the supplied `.github/workflows/pages.yml`. You do not need to add a suggested Jekyll template or another workflow.

Use GitHub Actions for this layout. Branch-based Pages settings offer the repository root or `/docs`, whereas this website is in `dist/`. The supplied workflow uploads `dist/` as the website root.

### C. Run the first deployment

1. Open the repository's **Actions** tab.
2. Select **Deploy portfolio to GitHub Pages** in the left sidebar.
3. Click **Run workflow**.
4. Choose branch **main** and click the confirmation **Run workflow** button.
5. Open the new run and wait for its deployment job to succeed.
6. Follow the published URL in the successful deployment, or go to **Settings → Pages → Visit site**.

For the current repository name, the expected address is:

```text
https://sarang-pekhale.github.io/sarang-pekhale-portfolio/
```

This is the expected future address, not confirmation that a site is already live. Use the URL returned by GitHub after deployment. The shorter account address `https://sarang-pekhale.github.io/` requires a repository named `Sarang-Pekhale.github.io`; a custom domain is another later option.

Open the deployed site and check the pages, photos, and Resume again. Local preview uses `/`; the deployed project uses `/sarang-pekhale-portfolio/`, so this final check confirms that relative links work under the project address.

## 6. Publish future changes

Your normal update sequence is:

1. Edit and preview the relevant files.
2. Commit and push or upload the changes to **main**.
3. Open **Actions → Deploy portfolio to GitHub Pages → Run workflow**.
4. Run it on **main** and wait for success.
5. Open the live website and refresh it.

Until the deployment succeeds, visitors see the previously deployed version. This lets you save several rounds of edits without making each one public immediately.

If you later want every push to `main` to deploy automatically, replace the workflow's existing `on:` block with:

```yaml
on:
  push:
    branches: [main]
  workflow_dispatch:
```

Keep the other workflow settings intact. This enables deployment on pushes to `main` and preserves the manual **Run workflow** button. It also means a resume upload or ordinary edit committed to `main` can update the live site automatically.

## 7. Undo a change

For a small text or style edit, open the file on GitHub, select **History**, inspect the version before the unwanted change, and restore the needed content using the file editor. Commit that restoration. This records the correction in the repository history.

If a whole commit should be undone and you use Git locally, inspect the history and revert that commit:

```bash
git log --oneline -n 10
git revert COMMIT_SHA
git push origin main
```

Replace `COMMIT_SHA` with the actual commit identifier you inspected. A revert adds a new commit that undoes the selected change. If conflicts occur, resolve them before completing the revert. For an already published site, run the manual deployment workflow after the restoration reaches `main`.

To roll back a photo or resume, restore the previous file under the same path, commit it, and deploy. Keep local copies of versions you may want to restore.

## 8. Troubleshooting

| Symptom | What to check |
| --- | --- |
| Pages asks you to upgrade | GitHub Free does not publish Pages from this private personal repository. Either keep it unpublished, use an eligible plan, or make the repository public when ready. |
| **Run workflow** is missing | Check that `.github/workflows/pages.yml` is on the default branch and contains `workflow_dispatch`. Open that workflow in the Actions sidebar. You need write access. |
| Workflow does not appear | Confirm the file is under `.github/workflows/` at the repository root, has a `.yml` or `.yaml` extension, and was committed to `main`. |
| Deployment fails | Open the failed Actions run and read the first failed step. Confirm Pages source is **GitHub Actions**, the workflow uploads `dist`, and its deploy job has `pages: write`, `id-token: write`, and the `github-pages` environment. |
| Site returns 404 | Confirm the deployment succeeded, use the URL GitHub returned, and check that `dist/index.html` exists in the deployed commit. |
| Images or nested pages fail | Check filename case and relative paths. An asset path in `content.js` should resemble `./assets/example.jpeg`, without `dist/` or a leading `/`. Nested HTML uses `../` where needed. |
| Resume stays blank | Check `dist/assets/sarang-pekhale-cv.pdf`, exact spelling/case, valid PDF content, JavaScript enabled, and a successful deployment containing the file. Preview through the local HTTP server. |
| GitHub has the change but the site does not | Run the manual workflow on `main`, confirm success, then hard-refresh with **Ctrl+Shift+R**. A commit alone does not deploy with the manual workflow. |
| Editing `content.js` does not change Education or Experience | Those homepage cards are static HTML in `dist/index.html`. Use the mapping in section 2. |
| Publication or research edits do not appear | Check `content.js` for a syntax error and inspect the browser console. Also keep the fallback HTML in sync. |
| Contact email changed in one place only | About Me uses `content.js`; the closing contact icons are stored separately in `dist/index.html`. |
| Browser upload rejects a large file | The web interface permits up to 25 MiB per file. Use a smaller PDF/image where appropriate, or use Git for files within its supported limits. |
| Local server reports a missing directory | Run the command from the repository root, where `dist/` exists. |
| Port 8000 is already in use | Replace `8000` with `8001` in the server command and open `http://localhost:8001/`. |
| GitHub edit/upload is blocked on a protected branch | Make the change on a new branch and merge it through the repository's required review process. |

## Official references

GitHub instructions and plan distinctions were checked on 17 October 2026. Interface wording may change; the current GitHub page is authoritative.

- [GitHub Pages availability and project URLs](https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages)
- [Change repository visibility](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/setting-repository-visibility)
- [Configure a Pages publishing source](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)
- [Use a custom Pages workflow](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages)
- [Run a workflow manually](https://docs.github.com/en/actions/how-tos/manage-workflow-runs/manually-run-a-workflow)
- [Edit files on GitHub](https://docs.github.com/en/repositories/working-with-files/managing-files/editing-files)
- [Upload files to a repository](https://docs.github.com/en/repositories/working-with-files/managing-files/adding-a-file-to-a-repository)
