" ======================
" Auto download vim-plug
" ======================
if empty(glob('~/.local/share/nvim/site/autoload/plug.vim'))
  silent !curl -fLo ~/.local/share/nvim/site/autoload/plug.vim --create-dirs https://raw.githubusercontent.com/junegunn/vim-plug/master/plug.vim
  autocmd VimEnter * PlugInstall --sync | source $MYVIMRC
endif

" ========================
" Vim Copy-Paste to System
" ========================
if has('clipboard')
    if has('unnamedplus')
        set clipboard=unnamed,unnamedplus
    else
        set clipboard=unnamed
    endif
endif

" ================
" Set environments
" ================
set hidden
set title
set number
set cursorline
set termguicolors
set mouse=a

set incsearch
set smartcase
set ignorecase
set showmatch

set list listchars=extends:❯,precedes:❮,tab:▸\ ,trail:˽

set noundofile
set noswapfile
set nobackup
set nowritebackup

set breakindent
set smartindent
set autoindent
set autowrite

set tabstop=4
set shiftwidth=4
set expandtab

au BufRead,BufNewFile *.js,*.html,*.css,*.vue set tabstop=2 | set shiftwidth=2

set fileformat=unix
set fileencoding=utf-8
set termencoding=utf-8

set shortmess+=c
set signcolumn=yes
set nowrap

" ================
" Vim-plug plugins
" ================
call plug#begin('~/.vim/plugged')
Plug 'scrooloose/nerdtree'
    autocmd StdinReadPre * let s:std_in=1
    autocmd VimEnter * if argc() == 0 && !exists('s:std_in') | NERDTree | endif
    autocmd VimEnter * if argc() == 1 && isdirectory(argv()[0]) && !exists('s:std_in') | exe 'NERDTree' argv()[0] | wincmd p | ene | exe 'cd '.argv()[0] | endif
    autocmd bufenter * if (winnr('$') == 1 && exists('b:NERDTree') && b:NERDTree.isTabTree()) | q | endif
Plug 'vim-airline/vim-airline'                   " Nvim status line
    let g:airline#extensions#tabline#enabled = 1 " Show tab
Plug 'yggdroot/indentline'
    let g:indentLine_conceallevel = 1
    let g:indentLine_char_list    = ['|', '¦', '┆', '┊']
Plug 'scrooloose/nerdcommenter'
    let g:NERDSpaceDelims = 1
    let g:NERDCompactSexyComs = 1
    let g:NERDDefaultAlign = 'left'
    let g:NERDAltDelims_java = 1
    let g:NERDCommentEmptyLines = 1
    let g:NERDTrimTrailingWhitespace = 1
    let g:NERDToggleCheckAllLines = 1
Plug 'lervag/vimtex'
    let g:tex_flavor='latex'
    let g:vimtex_view_method='zathura'
    let g:vimtex_quickfix_mode=0
    set conceallevel=1
    let g:tex_conceal='abdmg'

Plug 'arcticicestudio/nord-vim'
Plug 'editorconfig/editorconfig-vim'
Plug 'jiangmiao/auto-pairs'
Plug 'junegunn/vim-easy-align'
Plug 'thirtythreeforty/lessspace.vim'
Plug 'machakann/vim-highlightedyank'
Plug 'stephpy/vim-yaml'

call plug#end()

filetype on
syntax on
colorscheme nord

autocmd! BufNewFile,BufRead Dvcfile,*.dvc setfiletype yaml

" ====================
" Mapping keys binding
" ====================
let mapleader = ' '
map <c-n> :NERDTreeToggle<CR>

" Move between windows
nnoremap H <C-w>h
nnoremap J <C-w>j
nnoremap K <C-w>k
nnoremap L <C-w>l

" Auto Align
xmap ga <Plug>(EasyAlign)
nmap ga <Plug>(EasyAlign)

