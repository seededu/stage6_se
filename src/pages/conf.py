# Configuration file for the Sphinx documentation builder.
#
# For the full list of built-in configuration values, see the documentation:
# https://www.sphinx-doc.org/en/master/usage/configuration.html

# -- Project information -----------------------------------------------------
# https://www.sphinx-doc.org/en/master/usage/configuration.html#project-information

project = 'stage6_se'
# copyright = '2024, Alison Wong, Stephen Tierney'
author = 'Alison Wong, Stephen Tierney'

# -- General configuration ---------------------------------------------------
# https://www.sphinx-doc.org/en/master/usage/configuration.html#general-configuration

suppress_warnings = ['misc.highlighting_failure']

extensions = [
    'sphinx_exec_code', 'sphinx_design', 'sphinx_copybutton', 'sphinxcontrib.spelling'
]

templates_path = ['_templates']
exclude_patterns = ['_build', 'Thumbs.db', '.DS_Store']

# Options for spelling
# https://sphinxcontrib-spelling.readthedocs.io/en/latest/customize.html

spelling_lang='en_AU'
tokenizer_lang='en_AU'
spelling_word_list_filename='spelling_wordlist.txt'
spelling_exclude_patterns=['**/*.csv']

# -- Options for HTML output -------------------------------------------------
# https://www.sphinx-doc.org/en/master/usage/configuration.html#options-for-html-output

html_theme = "sphinx_book_theme"
html_title = "Software Engineering Stage 6"
html_static_path = ['_static']

html_theme_options = {
    "logo": {
        "text": "SE - Stage 6",
        # "image_light": "_static/logo-light.png",
        # "image_dark": "_static/logo-dark.png",
    },
    "extra_footer": '<div><p xmlns:cc="http://creativecommons.org/ns#" xmlns:dct="http://purl.org/dc/terms/"><span property="dct:title">Software Engineering - Stage 6</span> by <span property="cc:attributionName">Alison Wong and Stephen Tierney</span> is marked with <a href="https://creativecommons.org/publicdomain/zero/1.0/?ref=chooser-v1" target="_blank" rel="license noopener noreferrer" style="display:inline-block;">CC0 1.0 Universal<img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/cc.svg?ref=chooser-v1" alt=""><img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/zero.svg?ref=chooser-v1" alt=""></a></p></div>',
    "icon_links": [
        {
            # Label for this link
            "name": "GitHub",
            # URL where the link will redirect
            "url": "https://github.com/seededu/stage6_se/",  # required
            # Icon class (if "type": "fontawesome"), or path to local image (if "type": "local")
            "icon": "fa-brands fa-square-github",
            # The type of image to be used (see below for details)
            "type": "fontawesome",
        }
   ],
    # "repository_url": "https://github.com/seededu/stage6_se",
    # "repository_branch": "main",
    # "use_edit_page_button": True,
    "use_source_button": True,
    # "use_issues_button": True,
    "use_download_button": False,
    "analytics": {
        "google_analytics_id": "G-4F2QYM28MP",
    }
}


html_context = {
    # "github_url": "https://github.com", # or your GitHub Enterprise interprise
    "github_user": "seededu",
    "github_repo": "stage6_se",
    "github_version": "main",
    "doc_path": "src/pages",
}
