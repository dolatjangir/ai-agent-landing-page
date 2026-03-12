"use client"

import React, { useState } from 'react'
import Head from 'next/head'
import { motion, useInView, AnimatePresence, Variants  } from 'framer-motion'
import { 
  Check,
  X,
  ArrowRight,
  Star,
  Zap,
  Shield,
  Clock,
  TrendingUp,
  Users,
  Crown,
  Sparkles,
  Building2,
  Calendar,
  MessageSquare,
  BarChart3,
  Globe,
  
  ChevronDown,
  HelpCircle,
  Rocket,
  Lock,
  Award,
  ThumbsUp,
  Target,
  LineChart,
  Wallet,
  Percent,
  Bell,
  FileText,
  Smartphone,
  Laptop,
  ChevronRight,

  Mail,
  Phone,
  CheckCircle2,
  Infinity,
  Workflow,
  Server,
  Database,
  Cloud,
  PieChart,
  Settings,
  Layers,
  Briefcase,
  MapPin,
  
  Cpu,
  Network,
  Gauge,
  Activity,
  Compass,
  Lightbulb,
  Users2,
  Handshake,
  FileCheck,
  Clock3,
  AlertCircle,
  Search,
  Filter,
  Download,
  Share2,
  RefreshCw,
  
  Laptop2,
  Cable,
  Plug,
  Puzzle,
  GitBranch,
  GitMerge,
  Webhook,
  Code2,
  Terminal,
  Braces,
  FileJson,
  Key,
  Fingerprint,
  Eye,
  EyeOff,
  LockIcon,
  Unlock,
  Vault,
  BadgeCheck,
  ClipboardCheck,
  Stamp,
  FileBadge,
  ShieldCheck,
  ShieldAlert,
  ShieldOff,
  Siren,
  Megaphone,
  Radio,
  Satellite,
  Wifi,
  WifiOff,
  Signal,
  SignalHigh,
  SignalMedium,
  SignalLow,
  Battery,
  BatteryCharging,
  BatteryFull,
  BatteryMedium,
  BatteryLow,
  Power,
  PowerOff,
  Sun,
  Moon,
  Sunrise,
  Sunset,
  CloudSun,
  CloudRain,
  CloudLightning,
  CloudSnow,
  Wind,
  Thermometer,
  Droplets,
  Flame,
  Snowflake,
  Umbrella,
  Navigation,
  Map,
  MapPinned,
  Locate,
  LocateFixed,
  LocateOff,
  Crosshair,
  Focus,
  Scan,
  ScanLine,
  ScanFace,
  Contact,
  Contact2,
  Notebook,
  BookOpen,
  BookMarked,
  Library,
  GraduationCap,
  School,
  University,
  Building,
  Hotel,
  Home,
  Warehouse,
  Factory,
  Store,
  ShoppingBag,
  ShoppingCart,
  CreditCard,
  Banknote,
  Coins,
  DollarSign,
  Euro,
  PoundSterling,
  JapaneseYen,
  Receipt,
  FileAxis3d,
  FileBarChart,
  FileBox,
  FileCheck2,
  FileClock,
  FileCode,
  FileCog,
  FileDiff,
  FileDigit,
  FileImage,
  FileJson2,
  FileKey,
  FileLock,
  FileMinus,
  FileMusic,
  FileOutput,
  FilePlus,
  FileQuestion,
  FileSearch,
  FileSliders,
  FileSpreadsheet,
  FileStack,
  FileSymlink,
  FileTerminal,
  FileTextIcon,
  FileType,
  FileType2,
  FileUp,
  FileVideo,
  FileVolume,
  FileWarning,
  FileX,
  Files,
  Folder,
  FolderOpen,
  FolderPlus,
  FolderMinus,
  FolderSearch,
  FolderSymlink,
  FolderTree,
  FolderX,
  Folders,
  Calculator,
  Printer,
  QrCode,
  Link,
  Link2,
  Unlink,
  ExternalLink,
  DownloadIcon,
  Save,
  Trash,
  Trash2,
  Edit,
  Edit2,
  Edit3,
  Copy,
  Clipboard,
  ClipboardCopy,
  ClipboardList,
  ClipboardX,
  Scissors,
  AlignLeft,
  AlignCenter,
  AlignRight,
  AlignJustify,
  Bold,
  Italic,
  Underline,
  Strikethrough,
  Type,
  List,
  ListOrdered,
  ListChecks,
  ListTodo,
  ListPlus,
  ListMinus,
  ListX,
  ListCollapse,
  ListStart,
  ListEnd,
  ListTree,
  ListVideo,
  Grid,
  Grid3x3,
  Grid2x2,
  Grid2x2Check,
  Layout,
  LayoutGrid,
  LayoutList,
  LayoutTemplate,
  LayoutDashboard,
  PanelLeft,
  PanelRight,
  PanelTop,
  PanelBottom,
  Sidebar,
  SidebarClose,
  SidebarOpen,
  Menu,
  MenuSquare,
  Command,
  Asterisk,
  Hash,
  AtSign,
  Ampersand,
  Quote,

  Code,
  CodeIcon,

  Keyboard,
  Mouse,
  MousePointer,
  MousePointer2,
  MousePointerClick,
  Pointer,
  Move,
  Move3d,
  MoveDiagonal,
  MoveDiagonal2,
  MoveHorizontal,
  MoveVertical,
  ArrowUp,
  ArrowDown,
  ArrowLeft,
  ArrowUpLeft,
  ArrowUpRight,
  ArrowDownLeft,
  ArrowDownRight,
  ChevronsUp,
  ChevronsDown,
  ChevronsLeft,
  ChevronsRight,
  ChevronsUpDown,
  ChevronsLeftRight,
  ChevronsLeftRightIcon,
  Expand,
  Shrink,
  Maximize,
  Minimize,
  Minimize2,
  RotateCw,
  RotateCcw,
  RefreshCcw,
  Repeat,
  Repeat1,
  Repeat2,
  Shuffle,
  FlipHorizontal,
  FlipVertical,
  FlipVertical2,
  Scale,
  Scale3d,
  Proportions,
  StretchHorizontal,
  StretchVertical,
  Crop,
  Square,
  RectangleHorizontal,
  RectangleVertical,
  Circle,
  Triangle,
  Diamond,
  Octagon,
  Hexagon,
  Pentagon,
 
  Bookmark,
  BookmarkIcon,
  Flag,
  FlagIcon,
  FlagTriangleLeft,
  FlagTriangleRight,
  Pin,
  CircleDollarSign,
  CircleDashed,
  CircleDot,
  CircleEllipsis,
  CircleEqual,
  CircleFadingPlus,
  CircleFadingArrowUp,
  CircleGauge,
  CircleHelp,
  CircleMinus,
  CircleOff,
  CircleParking,
  CircleParkingOff,
  CirclePause,
  CirclePercent,
  CirclePlay,
  CirclePlus,
  CirclePower,
  CircleSlash,
  CircleSlash2,
  CircleStop,
  CircleUser,
  CircleUserRound,
  CircleX,
  CircleCheck,
  CircleCheckBig,
  CircleAlert,
  CircleArrowUp,
  CircleArrowDown,
  CircleArrowLeft,
  CircleArrowRight,

  SquareDashed,
  SquareDot,
  SquareEqual,
  SquareSlash,
  SquareStack,

  SquareMinus,
  SquarePlus,
  SquareX,
  SquareCheck,
  SquareCheckBig,
  SquareArrowUp,
  SquareArrowDown,
  SquareArrowLeft,
  SquareArrowRight,
  SquareArrowUpLeft,
  SquareArrowUpRight,
  SquareArrowDownLeft,
  SquareArrowDownRight,
  SquareAsterisk,
  SquareActivity,
  SquareDivide,
  SquareFunction,
  SquareKanban,
  SquareLibrary,
  SquareM,
  SquareMenu,
  SquareMousePointer,
  SquarePen,
  SquarePilcrow,
  SquarePlay,
  SquarePower,
  SquareRadical,
  SquareScissors,
  SquareSigma,
  SquareSplitHorizontal,
  SquareSplitVertical,
  SquareSquare,
  SquareTerminal,
 
  SquareUser,
  SquareUserRound,
  TriangleDashed,
  TriangleAlert,
  TriangleRight,
  OctagonAlert,
  OctagonPause,
  OctagonX,
 
  Annoyed,
  AnnoyedIcon,
  Antenna,
  Anvil,
  Aperture,
  AppWindow,
  AppWindowMac,
  Apple,
  Archive,
  ArchiveIcon,
  ArchiveRestore,
  ArchiveX,
  Armchair,
  ArrowBigDown,
  ArrowBigLeft,
  ArrowBigRight,
  ArrowBigUp,
  ArrowBigDownDash,
  ArrowBigLeftDash,
  ArrowBigRightDash,
  ArrowBigUpDash,
  ArrowDown01,
  ArrowDown10,
  ArrowDownAZ,
  ArrowDownFromLine,
  ArrowDownLeftFromCircle,
  ArrowDownLeftFromSquare,
  ArrowDownNarrowWide,
  ArrowDownRightFromCircle,
  ArrowDownRightFromSquare,
  ArrowDownToDot,
  ArrowDownToLine,
  ArrowDownUp,
  ArrowDownWideNarrow,
  ArrowDownZA,
  ArrowLeftFromLine,
  ArrowLeftRight,
  ArrowLeftToLine,
  ArrowRightFromLine,
  ArrowRightLeft,
  ArrowRightToLine,
  ArrowUp01,
  ArrowUp10,
  ArrowUpAZ,
  ArrowUpFromDot,
  ArrowUpFromLine,
  ArrowUpLeftFromCircle,
  ArrowUpLeftFromSquare,
  ArrowUpNarrowWide,
  ArrowUpRightFromCircle,
  ArrowUpRightFromSquare,
  ArrowUpToLine,
  ArrowUpWideNarrow,
  ArrowUpZA,
  ArrowsUpFromLine,
  AsteriskIcon,
  AsteriskSquare,
  Atom,
  AudioLines,
  AudioWaveform,
  AwardIcon,
  Axe,
  Axis3d,
  Baby,
  Backpack,

  BadgeAlert,
  BadgeCent,
  BadgeCheckIcon,
  BadgeDollarSign,
  BadgeEuro,
  BadgeHelp,
  BadgeIndianRupee,
  BadgeInfo,
  BadgeJapaneseYen,
  BadgeMinus,
  BadgePercent,
  BadgePlus,
  BadgePoundSterling,
  BadgeRussianRuble,
  BadgeSwissFranc,
  BadgeX,
  BaggageClaim,
  Ban,
  Banana,
  Bandage,
  BanknoteIcon,
  Barcode,
  Baseline,
  Bath,
  BatteryWarning,
  Beaker,
  Bean,
  BeanOff,
  Bed,
  BedDouble,
  BedSingle,
  Beef,
  Beer,
  BeerOff,
  BellDot,
  BellElectric,
  BellMinus,
  BellPlus,
  BellRing,
  BetweenHorizontalEnd,
  BetweenHorizontalStart,
  BetweenVerticalEnd,
  BetweenVerticalStart,
  BicepsFlexed,
  Bike,
  Binary,
  Binoculars,
  Biohazard,
  Bird,
  Blend,
  Blinds,
  Blocks,
  Bluetooth,
  BluetoothConnected,
  BluetoothOff,
  BluetoothSearching,
  BoldIcon,
  Bolt,
  Bomb,
  Bone,
  Book,
  BookAIcon,
  BookAudio,
  BookCheck,
  BookCopy,
  BookDashed,
  BookDown,
  BookHeadphones,
  BookHeart,
  BookImage,
  BookKey,
  BookLock,
  BookMarkedIcon,
  BookMinus,
  BookOpenCheck,
  BookOpenText,
  BookPlus,
  BookText,
  BookType,
  BookUp,
  BookUp2,
  BookUser,
  BookX,
  BookmarkMinus,
  BookmarkPlus,
  BookmarkX,
  BoomBox,
  Bot,
  BotMessageSquare,
  BotOff,
  Box,
  BoxSelect,
  Boxes,
  BracesIcon,
  Brackets,
  Brain,
  BrainCircuit,
  BrainCog,
  BrickWall,
  BriefcaseIcon,
  BringToFront,
  Brush,
  Bug,
  BugOff,
  BugPlay,
  BuildingIcon,
  Bus,
  BusFront,
  CableIcon,
  Cake,
  CakeSlice,
  CalculatorIcon,
  CalendarArrowDown,
  CalendarArrowUp,
  CalendarCheck2,
  CalendarCheckIcon,
  CalendarClock,
  CalendarCog,
  CalendarDays,
  CalendarFold,
  CalendarHeart,
  CalendarIcon,
  CalendarMinus2,
  CalendarMinusIcon,
  CalendarOff,
  CalendarPlus2,
  CalendarPlusIcon,
  CalendarRange,
  CalendarSearch,
  CalendarX2,
  CalendarXIcon,
  Camera,
  CameraOff,
  Candy,
  CandyCane,
  CandyOff,
  Car,
  CarFront,
  CarTaxiFront,
  Caravan,
  Carrot,
  CaseLower,
  CaseSensitive,
  CaseUpper,
  CassetteTape,
  Cast,
  Castle,
  Cat,
  Cctv,
  CheckCheck,
  CheckIcon,
  ChefHat,
  Cherry,
  ChevronFirst,
  ChevronLast,
  ChevronLeft,
  ChevronUp,
  ChevronsDownUp,
  ChevronsUpDownIcon,
  Chrome,
  Church,
  Cigarette,
  CigaretteOff,
  CircleAlertIcon,
  CircleArrowDownIcon,
 
  CircleArrowLeftIcon,
  CircleArrowRightIcon,
  CircleArrowUpIcon,

  CircleCheckBigIcon,
  CircleCheckIcon,
  CircleChevronDown,
  CircleChevronLeft,
  CircleChevronRight,
  CircleChevronUp,
  CircleDashedIcon,
  CircleDivide,
  CircleDollarSignIcon,
  CircleDotDashed,
  CircleDotIcon,
  CircleEllipsisIcon,
  CircleEqualIcon,
  CircleFadingArrowUpIcon,
  CircleFadingPlusIcon,
  CircleGaugeIcon,
  CircleHelpIcon,
  CircleIcon,
  CircleMinusIcon,
  CircleOffIcon,
  CircleParkingIcon,
  CircleParkingOffIcon,
  CirclePauseIcon,
  CirclePercentIcon,
  CirclePlayIcon,
  CirclePlusIcon,
  CirclePowerIcon,
  CircleSlashIcon,
  CircleSlash2Icon,
  CircleStopIcon,
  CircleUserIcon,
  CircleUserRoundIcon,
  CircleXIcon,
  CircuitBoard,
  Citrus,
  Clapperboard,
  ClipboardCheckIcon,
  ClipboardCopyIcon,
  ClipboardIcon,
  ClipboardListIcon,
  ClipboardMinus,
  ClipboardPaste,
  ClipboardPen,
  ClipboardPenLine,
  ClipboardPlus,
  ClipboardType,
  ClipboardXIcon,
  Clock1,
  Clock10,
  Clock11,
  Clock12,
  Clock2,
  Clock3Icon,
  Clock4,
  Clock5,
  Clock6,
  Clock7,
  Clock8,
  Clock9,
  ClockIcon,
  CloudCog,
  CloudDownload,
  CloudDrizzle,
  CloudFog,
  CloudHail,
  CloudIcon,
  CloudLightningIcon,
  CloudMoon,
  CloudMoonRain,
  CloudOffIcon,
  CloudRainIcon,
  CloudRainWind,
  CloudSnowIcon,
  CloudSunIcon,
  CloudSunRain,
  CloudUpload,
  Cloudy,
  Clover,
  Club,
  Codepen,
  Codesandbox,
  Coffee,
  Cog,
  CoinsIcon,
  Combine,
  CommandIcon,
  CompassIcon,
  Component,
  Computer,
  ConciergeBell,
  Cone,
  Construction,
  ContactIcon,
  Contact2Icon,
  Container,
  Contrast,
  Cookie,
  CookingPot,
  CopyCheck,
  CopyIcon,
  CopyMinus,
  CopyPlus,
  CopySlash,
  CopyX,
  Copyleft,
  Copyright,
  CornerDownLeft,
  CornerDownRight,
  CornerLeftDown,
  CornerLeftUp,
  CornerRightDown,
  CornerRightUp,
  CornerUpLeft,
  CornerUpRight,
  CpuIcon,
  CreativeCommons,
  CreditCardIcon,
  Croissant,
  CropIcon,
  Cross,
  CrossIcon,
  CrosshairIcon,
  CrownIcon,
  Cuboid,
  CupSoda,
  Currency,
  Cylinder,
  DatabaseBackup,
  DatabaseIcon,
  DatabaseZap,
  Delete,
  DiamondIcon,
  DiamondMinus,
  DiamondPercent,
  DiamondPlus,
  Dice1,
  Dice2,
  Dice3,
  Dice4,
  Dice5,
  Dice6,
  Dices,
  Diff,
  Disc,
  Disc2,
  Disc3,
  DiscAlbum,
  Divide,
  DivideCircle,
  DivideSquare,
  Dna,
  DnaOff,
  Dock,
  Dog,
  DollarSignIcon,
  Donut,
  DoorClosed,
  DoorOpen,
  Dot,
  DownloadCloud,
  Dribbble,
  Drill,
  Droplet,
  DropletsIcon,
  Drum,
  Drumstick,
  Dumbbell,
  Ear,
  EarOff,
  Earth,
  EarthIcon,
  EarthLock,
  Eclipse,
  Egg,
  EggFried,
  EggOff,
  Equal,
  EqualNot,
  Eraser,
  EuroIcon,
  ExpandIcon,
  ExternalLinkIcon,
  EyeIcon,
  EyeOffIcon,
  Facebook,
  FactoryIcon,
  Fan,
  FastForward,
  Feather,
  Fence,
  FerrisWheel,
  Figma,
  FileArchive,
  FileAudio,
  FileAudio2,
  FileAxis3dIcon,
  FileBadge2,
  FileBadgeIcon,
  FileBarChartIcon,
  FileBoxIcon,
  FileChartColumn,
  FileChartColumnIncreasing,
  FileChartLine,
  FileChartPie,
  FileCheck2Icon,
  FileCheckIcon,
  FileClockIcon,
  FileCode2,
  FileCodeIcon,
  FileCogIcon,
  FileDiffIcon,
  FileDigitIcon,
  FileDown,
  FileHeart,
  FileImageIcon,
  FileInput,
  FileJsonIcon,
  FileKey2,
  FileKeyIcon,
  FileLock2,
  FileLockIcon,
  FileMinus2,
  FileMinusIcon,
  FileMusicIcon,
  FileOutputIcon,
  FilePen,
  FilePenLine,
  FilePlus2,
  FilePlusIcon,
  FileQuestionIcon,
  FileScan,
  FileSearch2,
  FileSearchIcon,
  FileSlidersIcon,
  FileSpreadsheetIcon,
  FileStackIcon,
  FileSymlinkIcon,
  FileTerminalIcon,
  FileType2Icon,
  FileTypeIcon,
  FileUpIcon,
  FileVideo2,
  FileVideoIcon,
  FileVolume2,
  FileVolumeIcon,
  FileWarningIcon,
  FileX2,
  FileXIcon,
  FilesIcon,
  Film,
  FilterIcon,
  FilterX,
  FingerprintIcon,
  FireExtinguisher,
  Fish,
  FishOff,
  FishSymbol,
  FlagOff,
  FlagTriangleLeftIcon,
  FlagTriangleRightIcon,
  FlameIcon,
  FlameKindling,
  Flashlight,
  FlashlightOff,
  FlaskConical,
  FlaskConicalOff,
  FlaskRound,
  FlipHorizontal2,
  FlipHorizontalIcon,
  FlipVerticalIcon,
  Flower,
  Flower2,
  FocusIcon,
  FoldHorizontal,
  FoldVertical,
  FolderArchive,
  FolderCheck,
  FolderClock,
  FolderClosed,
  FolderCode,
  FolderCog,
  FolderDot,
  FolderDown,
  FolderGit,
  FolderGit2,
  FolderHeart,
  FolderIcon,
  FolderInput,
  FolderKanban,
  FolderKey,
  FolderLock,
  FolderMinusIcon,
  FolderOpenDot,
  FolderOpenIcon,
  FolderOutput,
  FolderPen,
  FolderPlusIcon,
  FolderRoot,
  FolderSearch2,
  FolderSearchIcon,
  FolderSymlinkIcon,
  FolderSync,
  FolderTreeIcon,
  FolderUp,
  FolderXIcon,
  FoldersIcon,
  Footprints,
  Forklift,
  FormInput,
  Forward,
  Frame,
  Framer,
  Frown,
  Fuel,
  Fullscreen,
  FunctionSquare,
  GalleryHorizontal,
  GalleryHorizontalEnd,
  GalleryThumbnails,
  GalleryVertical,
  GalleryVerticalEnd,
  Gamepad,
  Gamepad2,
  GaugeIcon,
  Gavel,
  Gem,
  Ghost,
  GiftIcon,
  GitBranchIcon,
  GitBranchPlus,
  GitCommitHorizontal,
  GitCommitVertical,
  GitCompare,
  GitCompareArrows,
  GitFork,
  GitGraph,
  GitMergeIcon,
  GitPullRequest,
  GitPullRequestArrow,
  GitPullRequestClosed,
  GitPullRequestCreate,
  GitPullRequestCreateArrow,
  GitPullRequestDraft,
  Github,
  Gitlab,
  GlassWater,
  Glasses,
  Globe2,
  GlobeIcon,
  Goal,
  Grab,
  GraduationCapIcon,
  Grape,
  Grid3X3,
  Grid3x3Icon,
  GridIcon,
  Grip,
  GripHorizontal,
  GripVertical,
  Group,
  Guitar,
  Ham,
  Hammer,
  Hand,
  HandCoins,
  HandHeart,
  HandHelping,
  HandMetal,
  HandPlatter,
  HandshakeIcon,
  HardDrive,
  HardDriveDownload,
  HardDriveUpload,
  HardHat,
  HashIcon,
  Haze,
  HdmiPort,
  Heading,
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  Heading5,
  Heading6,
  HeadphonesIcon,
  Headset,
  HeartCrack,
  HeartHandshake,
  HeartIcon,
  HeartMinus,
  HeartOff,
  HeartPlus,
  HeartPulse,
  Heater,
  HexagonIcon,
  Highlighter,
  History,
  HomeIcon,
  Hop,
  HopOff,
  Hospital,
  HotelIcon,
  Hourglass,
  IceCreamBowl,
  IceCreamCone,
  ImageIcon,
  ImageDown,
  ImageMinus,
  ImageOff,
  ImagePlay,
  ImagePlus,
  Images,
  Import,
  Inbox,
  Indent,
  IndentDecrease,
  IndentIncrease,
  IndianRupee,
  InfinityIcon,
  Info,
  InspectionPanel,
  Instagram,
  ItalicIcon,
  IterationCcw,
  IterationCw,
  JapaneseYenIcon,
  Joystick,
  Kanban,
  KanbanSquare,
  KanbanSquareDashed,
  KeyIcon,
  KeyRound,
  KeySquare,
  KeyboardIcon,
  KeyboardMusic,
  KeyboardOff,
  Lamp,
  LampCeiling,
  LampDesk,
  LampFloor,
  LampWallDown,
  LampWallUp,
  LandPlot,
  Landmark,
  Languages,
  LaptopIcon,
  Lasso,
  LassoSelect,
  Laugh,
  Layers2,
  Layers3,
  LayersIcon,
  LayoutDashboardIcon,
  LayoutGridIcon,
  LayoutListIcon,
  LayoutPanelLeft,
  LayoutPanelTop,
  LayoutTemplateIcon,
  Leaf,
  LeafyGreen,
  Lectern,
  LetterText,
  LibraryBig,
  LibraryIcon,
  LifeBuoy,
  Ligature,
  LightbulbIcon,
  LightbulbOff,
  LineChartIcon,
  Link2Icon,
  Link2Off,
  LinkIcon,
  Linkedin,
  ListCollapseIcon,
  ListEndIcon,
  ListFilter,
  ListIcon,
  ListMinusIcon,
  ListMusic,
  ListOrderedIcon,
  ListPlusIcon,
  ListRestart,
  ListStartIcon,
  ListTodoIcon,
  ListTreeIcon,
  ListVideoIcon,
  ListXIcon,
  Loader,
  Loader2,
  LoaderCircle,
  LocateFixedIcon,
  LocateIcon,
  LocateOffIcon,
  LockKeyhole,
  LockKeyholeOpen,
  LockOpen,
  LogIn,
  LogOut,
  Lollipop,
  Luggage,
  MSquare,
  Magnet,
  MailCheck,
  MailIcon,
  MailMinus,
  MailOpen,
  MailPlus,
  MailQuestion,
  MailSearch,
  MailWarning,
  MailX,
  Mailbox,
  Mails,
  MapIcon,
  MapPinIcon,
  MapPinMinus,
  MapPinMinusInside,
  MapPinOff,
  MapPinPlus,
  MapPinPlusInside,
  MapPinnedIcon,
  Martini,
  Maximize2Icon,
  MaximizeIcon,
  Medal,
  MegaphoneIcon,
  MegaphoneOff,
  Meh,
  MemoryStick,
  MenuIcon,
  Merge,
  MessageCircle,
  MessageCircleCode,
  MessageCircleDashed,
  MessageCircleHeart,
  MessageCircleMore,
  MessageCircleOff,
  MessageCirclePlus,
  MessageCircleQuestion,
  MessageCircleReply,
  MessageCircleWarning,
  MessageCircleX,
  MessageSquareCodeIcon,
  MessageSquareDashed,
  MessageSquareDiff,
  MessageSquareDot,
  MessageSquareHeart,
  MessageSquareIcon,
  MessageSquareMore,
  MessageSquareOff,
  MessageSquarePlus,
  MessageSquareQuote,
  MessageSquareReply,
  MessageSquareShare,
  MessageSquareText,
  MessageSquareWarning,
  MessageSquareX,
  MessagesSquare,
  Mic,
  Mic2,
  MicOff,
  Microscope,
  Microwave,
  Milestone,
  Milk,
  MilkOff,
  Minimize2Icon,
  MinimizeIcon,
  Minus,
  MinusCircle,
  MinusSquare,
  MonitorCheck,
  MonitorDot,
  MonitorDown,
  MonitorIcon,
  MonitorOff,
  MonitorPause,
  MonitorPlay,
  MonitorSmartphone,
  MonitorSpeaker,
  MonitorStop,
  MonitorUp,
  MonitorX,
  MoonIcon,
  MoreHorizontal,
  MoreVertical,
  Mountain,
  MountainSnow,
  MouseIcon,
  MousePointer2Icon,
  MousePointerClickIcon,
  MousePointerIcon,
  Move3dIcon,
  MoveDiagonal2Icon,
  MoveDiagonalIcon,
  MoveDown,
  MoveDownLeft,
  MoveDownRight,
  MoveHorizontalIcon,
  MoveIcon,
  MoveLeft,
  MoveRight,
  MoveUp,
  MoveUpLeft,
  MoveUpRight,
  MoveVerticalIcon,
  Music,
  Music2,
  Music3,
  Music4,
  Navigation2,
  Navigation2Off,
  NavigationIcon,
  NavigationOff,
  NetworkIcon,
  Newspaper,
  Nfc,
  NotebookIcon,
  NotebookPen,
  NotebookTabs,
  NotebookText,
  NotepadText,
  NotepadTextDashed,
  Nut,
  NutOff,
  OctagonAlertIcon,
  OctagonIcon,
  OctagonPauseIcon,
  OctagonXIcon,
  Option,
  Orbit,
  Outdent,
  Package,
  Package2,
  PackageCheck,
  PackageMinus,
  PackageOpen,
  PackagePlus,
  PackageSearch,
  PackageX,
  PaintBucket,
  PaintRoller,
  Paintbrush,
  Paintbrush2,
  Palette,
  Palmtree,
  PanelBottomClose,
  PanelBottomDashed,
  PanelBottomIcon,
  PanelBottomOpen,
  PanelLeftClose,
  PanelLeftDashed,
  PanelLeftIcon,
  PanelLeftOpen,
  PanelRightClose,
  PanelRightDashed,
  PanelRightIcon,
  PanelRightOpen,
  PanelTopClose,
  PanelTopDashed,
  PanelTopIcon,
  PanelTopOpen,
  PanelsLeftBottom,
  PanelsRightBottom,
  PanelsTopLeft,
  Paperclip,
  Parentheses,
  ParkingCircle,
  ParkingCircleOff,
  ParkingMeter,
  ParkingSquare,
  ParkingSquareOff,
  PartyPopper,
  Pause,
  PauseCircle,
  PauseOctagon,
  PawPrint,
  PcCase,
  Pen,
  PenLine,
  PenOff,
  PenTool,
  Pencil,
  PencilLine,
  PencilOff,
  PencilRuler,
  PentagonIcon,
  PercentCircle,
  PercentDiamond,
  PercentIcon,
  PercentSquare,
  PersonStanding,
  PhoneCall,
  PhoneForwarded,
  PhoneIncoming,
  PhoneMissed,
  PhoneOff,
  PhoneOutgoing,
  PhoneIcon,
  Pi,
  Piano,
  Pickaxe,
  PictureInPicture,
  PictureInPicture2,
  PieChartIcon,
  PiggyBank,
  Pilcrow,
  PilcrowLeft,
  PilcrowRight,
  PilcrowSquare,
  Pill,
  PillBottle,
  PinIcon,
  PinOffIcon,
  Pipette,
  Pizza,
  Plane,
  PlaneLanding,
  PlaneTakeoff,
  Play,
  PlayCircle,
  PlaySquare,
  Plug2,
  PlugIcon,
  PlugZap,
  PlugZap2,
  PlusCircle,
  PlusIcon,
  PlusSquare,
  Pocket,
  PocketKnife,
  Podcast,
  PointerIcon,
  PointerOff,
  Popcorn,
  Popsicle,
  PoundSterlingIcon,
  PowerIcon,
  PowerOffIcon,
  Presentation,
  PrinterIcon,
  Projector,
  ProportionsIcon,
  PuzzleIcon,
  Pyramid,
  QrCodeIcon,
  QuoteIcon,
  Rabbit,
  Radar,
  Radiation,
  RadioIcon,
  RadioReceiver,
  RadioTower,
  Radius,
  RailSymbol,
  Rainbow,
  Rat,
  Ratio,
  ReceiptCent,
  ReceiptEuro,
  ReceiptIcon,
  ReceiptIndianRupee,
  ReceiptJapaneseYen,
  ReceiptPoundSterling,
  ReceiptRussianRuble,
  ReceiptSwissFranc,
  ReceiptText,
  RectangleEllipsis,
  RectangleHorizontalIcon,
  RectangleVerticalIcon,
  Recycle,
  Redo,
  Redo2,
  RedoDot,
  RefreshCcwDot,
  RefreshCcwIcon,
  RefreshCwOff,
  Refrigerator,
  Regex,
  RemoveFormatting,
  Repeat1Icon,
  Repeat2Icon,
  RepeatIcon,
  Replace,
  ReplaceAll,
  Reply,
  ReplyAll,
  Rewind,
  RocketIcon,
  RockingChair,
  RollerCoaster,
  Rotate3d,
  RotateCcwIcon,
  RotateCcwSquare,
  RotateCwIcon,
  RotateCwSquare,
  Route,
  RouteOff,
  Router,
  Rows2,
  Rows3,
  Rows4,
  Rss,
  Ruler,
  RussianRubleIcon,
  Sailboat,
  Salad,
  Sandwich,
  SatelliteDish,
  SatelliteIcon,
  SaveAll,
  SaveIcon,
  Scale3dIcon,
 
  Scaling,
  ScanBarcode,
  ScanEye,
  ScanFaceIcon,
  ScanIcon,
  ScanLineIcon,
  ScanSearch,
  ScanText,
  School2,
  SchoolIcon,
  ScissorsIcon,
  ScissorsLineDashed,
  ScreenShare,
  ScreenShareOff,
  Scroll,
  ScrollText,
  SearchCheck,
  SearchCode,
  SearchIcon,
  SearchSlash,
  SearchX,
  Send,
  SendHorizonal,
  SendToBack,
  SeparatorHorizontal,
  SeparatorVertical,
  ServerCog,
  ServerCrash,
  ServerIcon,
  ServerOff,
  Settings2,
  SettingsIcon,
  Shapes,
  Share2Icon,
  ShareIcon,
  Sheet,
  Shell,
  ShieldAlertIcon,
  ShieldBan,
  ShieldCheckIcon,
  ShieldEllipsis,
  ShieldHalf,
  ShieldIcon,
  ShieldMinus,
  ShieldOffIcon,
  ShieldPlus,
  ShieldQuestion,
  ShieldXIcon,
  Ship,
  ShipWheel,
  Shirt,
  ShoppingBagIcon,
  ShoppingBasket,
  ShoppingCartIcon,
  Shovel,
  ShowerHead,
  ShrinkIcon,
  Shrub,
  ShuffleIcon,
  SidebarCloseIcon,
  SidebarIcon,
  SidebarOpenIcon,
  Sigma,
  SignalHighIcon,
  SignalIcon,
  SignalLowIcon,
  SignalMediumIcon,
  SignalZero,
  Signpost,
  SignpostBig,
  SirenIcon,
  SkipBack,
  SkipForward,
  Skull,
  Slack,
  Slash,
  Slice,
  SmartphoneIcon,
  SmartphoneNfc,
  Smile,
  SmilePlus,
  Snail,
  SnowflakeIcon,
  Sofa,
  Soup,
  Space,
  Spade,
  Sparkle,
  SparklesIcon,
  Speaker,
  Speech,
  SpellCheck,
  SpellCheck2,
  Spline,
  Split,
  SplitSquareHorizontal,
  SplitSquareVertical,
  SprayCan,
  Sprout,
  SquareActivityIcon,
  SquareArrowDownIcon,
  SquareArrowDownLeftIcon,
  SquareArrowDownRightIcon,
  SquareArrowLeftIcon,
  SquareArrowOutDownLeft,
  SquareArrowOutDownRight,
  SquareArrowOutUpLeft,
  SquareArrowOutUpRight,
  SquareArrowRightIcon,
  SquareArrowUpIcon,
  SquareArrowUpLeftIcon,
  SquareArrowUpRightIcon,
  SquareAsteriskIcon,
  SquareCheckBigIcon,
  SquareCheckIcon,
  SquareChevronDownIcon,
  SquareChevronLeftIcon,
  SquareChevronRightIcon,
  SquareChevronUpIcon,
  SquareCodeIcon,
  SquareDashedBottom,
  SquareDashedBottomCode,
  SquareDashedIcon,
  SquareDashedKanban,
  SquareDashedMousePointer,
  SquareDivideIcon,
  SquareDotIcon,
  SquareEqualIcon,
  SquareFunctionIcon,
  SquareGanttChart,
  SquareIcon,
  SquareKanbanIcon,
  SquareLibraryIcon,
  SquareMIcon,
  SquareMenuIcon,
  SquareMinusIcon,
  SquareMousePointerIcon,
  SquareParkingIcon,
  SquareParkingOffIcon,
  SquarePenIcon,
  SquarePercent,
  SquarePi,
  SquarePilcrowIcon,
  SquarePlayIcon,
  SquarePlusIcon,
  SquarePowerIcon,
  SquareRadicalIcon,
  SquareScissorsIcon,
  SquareSigmaIcon,
  SquareSlashIcon,
  SquareSplitHorizontalIcon,
  SquareSplitVerticalIcon,
  SquareSquareIcon,
  SquareStackIcon,
  SquareTerminalIcon,
  SquareUserIcon,
  SquareUserRoundIcon,
  SquareXIcon,
  Squircle,
  Squirrel,
  StampIcon,
  StarHalf,
  StarHalfIcon,
  StarIcon,
  StepBack,
  StepForward,
  Stethoscope,
  Sticker,
  StickyNote,
  StopCircle,
  StoreIcon,
  StretchHorizontalIcon,
  StretchVerticalIcon,
  StrikethroughIcon,
  Subscript,
  Subtitles,
  SunDim,
  SunIcon,
  SunMedium,
  SunMoon,
  SunriseIcon,
  SunsetIcon,
  Superscript,
  SwissFranc,
  SwitchCamera,
  Sword,
  Swords,
  Syringe,
  Table,
  Table2,
  TableCellsMerge,
  TableCellsSplit,
  TableColumnsSplit,
  TableProperties,
  TableRowsSplit,
  TabletIcon,
  Tablets,
  TagIcon,
  TagsIcon,
  Tally1,
  Tally2,
  Tally3,
  Tally4,
  Tally5,
  Tangent,
  TargetIcon,
  Tent,
  TentTree,
  TerminalIcon,
  TerminalSquare,
  TestTube,
  TestTube2,
  TestTubes,
  Text,
  TextCursor,
  TextCursorInput,
  TextQuote,
  TextSearch,
  TextSelect,
  TextSelection,
  Theater,
  ThermometerIcon,
  ThermometerSnowflake,
  ThermometerSun,
  ThumbsDown,
  ThumbsUpIcon,
  Ticket,
  TicketCheck,
  TicketMinus,
  TicketPercent,
  TicketPlus,
  TicketSlash,
  TicketX,
  Timer,
  TimerOff,
  TimerReset,
  ToggleLeft,
  ToggleRight,
  Tornado,
  Touchpad,
  TowerControl,
  ToyBrick,
  Tractor,
  TrafficCone,
  TrainFront,
  TrainFrontTunnel,
  TrainTrack,
  TramFront,
  Trash2Icon,
  TrashIcon,
  TreeDeciduous,
  TreePine,
  Trees,
  Trello,
  TrendingDown,
  TrendingDownIcon,
  TrendingUpDown,
  TrendingUpIcon,
  TriangleAlertIcon,
  TriangleIcon,
  TriangleRightIcon,
  Trophy,
  Truck,
  Turtle,
  Tv,
  Tv2,
  Twitch,
  Twitter,
  TypeIcon,
  UmbrellaIcon,
  UmbrellaOff,
  UnderlineIcon,
  Undo,
  Undo2,
  UndoDot,
  UnfoldHorizontal,
  UnfoldVertical,
  Ungroup,
  UniversityIcon,
  Unlink2,
  UnlinkIcon,
  UnlockIcon,
  UnlockKeyhole,
  Upload,
  UploadCloud,
  Usb,
  User,
  UserCheck,
  UserCog,
  UserIcon,
  UserMinus,
  UserPen,
  UserPlus,
  UserRound,
  UserRoundCheck,
  UserRoundCog,
  UserRoundMinus,
  UserRoundPen,
  UserRoundPlus,
  UserRoundSearch,
  UserRoundX,
  UserSearch,
  UserX,
  UsersIcon,
  UsersRound,
  Utensils,
  UtensilsCrossed,
  UtilityPole,
  Variable,
  VaultIcon,
  Vegan,
  VenetianMask,
  Vibrate,
  VibrateOff,
  Video,
  VideoOff,
  Videotape,
  View,
  Voicemail,
  Volume,
  Volume1,
  Volume2,
  VolumeIcon,
  VolumeOff,
  VolumeX,
  Vote,
  Wallet2,
  WalletCards,
  WalletIcon,
  Wallpaper,
  Wand,
  Wand2,
  WarehouseIcon,
  WashingMachine,
  Watch,
  Waves,
  Waypoints,
  Webcam,
  WebhookIcon,
  WebhookOff,
  Weight,
  Wheat,
  WheatOff,
  WholeWord,
  WifiHigh,
  WifiIcon,
  WifiLow,
  WifiOffIcon,
  WifiZero,
  WindIcon,
  Wine,
  WineOff,
  WorkflowIcon,
  Worm,
  WrapText,
  Wrench,
  XCircle,
  XIcon,
  XSquare,
  Youtube,
  ZapIcon,
  ZapOff,
  ZoomIn,
  ZoomOut,
  Plus
} from 'lucide-react'

// Animation variants
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.05, delayChildren: 0.1 }
  }
}

// Animated counter hook
const useAnimatedCounter = (end: number, duration: number = 2000) => {
  const [count, setCount] = React.useState(0)
  const ref = React.useRef(null)
  const isInView = useInView(ref, { once: true })
  
  React.useEffect(() => {
    if (isInView) {
      let startTime: number
      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime
        const progress = Math.min((currentTime - startTime) / duration, 1)
        setCount(Math.floor(progress * end))
        if (progress < 1) {
          requestAnimationFrame(animate)
        }
      }
      requestAnimationFrame(animate)
    }
  }, [isInView, end, duration])
  
  return { count, ref }
}

const AnimatedCounter = ({ value, suffix = "" }: { value: number; suffix?: string }) => {
  const { count, ref } = useAnimatedCounter(value)
  return <span ref={ref}>{count}{suffix}</span>
}

// Gradient Text Component
const GradientText = ({ children, className = "", variant = "primary" }: { 
  children: React.ReactNode
  className?: string
  variant?: "primary" | "secondary" | "accent" | "gold" | "success"
}) => {
  const gradients = {
    primary: "from-[var(--color-primary-600)] to-[var(--color-secondary-600)]",
    secondary: "from-[var(--color-secondary-500)] to-[var(--color-primary-500)]",
    accent: "from-cyan-500 to-blue-600",
    gold: "from-amber-500 via-yellow-400 to-amber-600",
    success: "from-emerald-500 to-teal-600"
  }
  
  return (
    <span className={`bg-gradient-to-r ${gradients[variant]} bg-clip-text text-transparent ${className}`}>
      {children}
    </span>
  )
}

// Badge Component

const Badge = ({ children, variant = "primary", size = "md", glow = false ,className }: { 
  children: React.ReactNode
  variant?: "primary" | "secondary" | "accent" | "success" | "gold" | "dark"
  size?: "sm" | "md" | "lg"
  glow?: boolean
  className?: string
}) => {
  const sizes = {
    sm: "px-3 py-1 text-xs",
    md: "px-4 py-1.5 text-sm",
    lg: "px-6 py-2 text-base"
  }
  
  const variants = {
    primary: "bg-[var(--color-primary-100)] text-[var(--color-primary-700)] border-[var(--color-primary-200)]",
    secondary: "bg-[var(--color-secondary-100)] text-[var(--color-secondary-700)] border-[var(--color-secondary-200)]",
    accent: "bg-cyan-100 text-cyan-700 border-cyan-200",
    success: "bg-[var(--color-success-100)] text-[var(--color-success-700)] border-[var(--color-success-200)]",
    gold: "bg-amber-100 text-amber-700 border-amber-200",
    dark: "bg-slate-800 text-white border-slate-700"
  }
  
  return (
    <span className={`inline-flex items-center gap-2 rounded-full font-bold border ${sizes[size]} ${variants[variant]} ${glow ? 'shadow-lg shadow-[var(--color-primary-500)]/20' : ''}`}>
      {children}
    </span>
  )
}

// Feature Category Header
const CategoryHeader = ({ icon: Icon, title, description }: { icon: any, title: string, description: string }) => (
  <div className="col-span-4 bg-[var(--bg-secondary)] p-4 rounded-xl border border-[var(--border-light)]">
    <div className="flex items-center gap-3">
      <div className="w-10 h-10 rounded-lg bg-[var(--color-primary-100)] flex items-center justify-center">
        <Icon className="w-5 h-5 text-[var(--color-primary-600)]" />
      </div>
      <div>
        <h3 className="font-bold text-[var(--text-primary)]">{title}</h3>
        <p className="text-sm text-[var(--text-secondary)]">{description}</p>
      </div>
    </div>
  </div>
)

// Comparison Row
const ComparisonRow = ({ 
  feature, 
  starter, 
  professional, 
  enterprise, 
  tooltip,
  highlight = false 
}: { 
  feature: string
  starter: React.ReactNode
  professional: React.ReactNode
  enterprise: React.ReactNode
  tooltip?: string
  highlight?: boolean
}) => (
  <div className={`grid grid-cols-[2fr,1fr,1fr,1fr] gap-4 p-4 items-center border-b border-[var(--border-light)] last:border-0 ${highlight ? 'bg-[var(--color-primary-50)]/30' : 'hover:bg-[var(--bg-secondary)]/50'} transition-colors`}>
    <div className="text-[var(--text-primary)] font-medium flex items-center gap-2">
      {feature}
      {tooltip && (
        <div className="group relative">
          <HelpCircle className="w-4 h-4 text-[var(--text-tertiary)] cursor-help" />
          <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-64 p-3 bg-slate-800 text-white text-sm rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50">
            {tooltip}
          </div>
        </div>
      )}
    </div>
    <div className="text-center flex justify-center">{starter}</div>
    <div className="text-center flex justify-center bg-[var(--color-primary-50)]/20 -my-4 py-4 border-x border-[var(--color-primary-100)]/20">{professional}</div>
    <div className="text-center flex justify-center">{enterprise}</div>
  </div>
)

// Value Indicator
const ValueIndicator = ({ value, type = "check" }: { value: boolean | string | number, type?: "check" | "text" | "number" }) => {
  if (type === "check") {
    if (value === true) return <CheckCircle2 className="w-6 h-6 text-[var(--color-success-600)]" />
    if (value === false) return <X className="w-5 h-5 text-[var(--text-tertiary)]" />
    return <span className="text-sm text-[var(--text-secondary)] font-medium">{value}</span>
  }
  return <span className="text-sm font-bold text-[var(--color-primary-600)]">{value}</span>
}

export default function PlanComparisonPage() {
  const [isYearly, setIsYearly] = useState(true)
  const [searchTerm, setSearchTerm] = useState("")
  const [activeTab, setActiveTab] = useState("all")
  const [showAllFeatures, setShowAllFeatures] = useState(false)

  const pricing  = {
    starter: { monthly: 0, yearly: 0, label: "Free" },
    professional: { monthly: 49, yearly: 39, label: "$49/mo" },
    enterprise: { monthly: "Custom", yearly: "Custom", label: "Custom" }
  }

  const categories = [
    { id: "core", label: "Core Features", icon: Zap },
    { id: "property", label: "Property Management", icon: Building2 },
    { id: "channel", label: "Channel Management", icon: Globe },
    { id: "automation", label: "Automation & AI", icon: Cpu },
    { id: "analytics", label: "Analytics & Reporting", icon: BarChart3 },
    { id: "communication", label: "Communication", icon: MessageSquare },
    { id: "financial", label: "Financial Tools", icon: Wallet },
    { id: "security", label: "Security & Compliance", icon: Shield },
    { id: "integration", label: "Integrations", icon: Puzzle },
    { id: "support", label: "Support & Services", icon: HeadphonesIcon },
  ]

  const features = [
    // CORE FEATURES
    { category: "core", feature: "Number of Properties", starter: "3", professional: "Unlimited", enterprise: "Unlimited", tooltip: "Total properties you can manage" },
    { category: "core", feature: "Number of Rooms/Units", starter: "10", professional: "Unlimited", enterprise: "Unlimited" },
    { category: "core", feature: "Team Members", starter: "2", professional: "Unlimited", enterprise: "Unlimited" },
    { category: "core", feature: "Concurrent Users", starter: "2", professional: "Unlimited", enterprise: "Unlimited" },
    { category: "core", feature: "Data Storage", starter: "5 GB", professional: "100 GB", enterprise: "Unlimited" },
    { category: "core", feature: "API Rate Limits", starter: "100/day", professional: "10,000/day", enterprise: "Unlimited" },
    { category: "core", feature: "Mobile App Access", starter: true, professional: true, enterprise: true },
    { category: "core", feature: "Web Dashboard", starter: true, professional: true, enterprise: true },
    { category: "core", feature: "Custom Branding", starter: false, professional: "Basic", enterprise: "Full White-Label" },
    { category: "core", feature: "Multi-Language Support", starter: "5 languages", professional: "25 languages", enterprise: "All languages" },
    { category: "core", feature: "Timezone Support", starter: true, professional: true, enterprise: true },
    { category: "core", feature: "Offline Mode", starter: false, professional: true, enterprise: true },

    // PROPERTY MANAGEMENT
    { category: "property", feature: "Property Types", starter: "Vacation Rentals", professional: "All Types", enterprise: "All Types + Custom" },
    { category: "property", feature: "Room Types Management", starter: "Basic", professional: "Advanced", enterprise: "Custom" },
    { category: "property", feature: "Amenities Management", starter: "Standard", professional: "Advanced", enterprise: "Custom Fields" },
    { category: "property", feature: "House Rules Engine", starter: true, professional: true, enterprise: true },
    { category: "property", feature: "Check-in/Check-out Automation", starter: "Basic", professional: "Advanced", enterprise: "Custom Workflows" },
    { category: "property", feature: "Guest Screening", starter: false, professional: true, enterprise: "Advanced + AI" },
    { category: "property", feature: "Damage Protection", starter: false, professional: true, enterprise: true },
    { category: "property", feature: "Security Deposit Management", starter: "Manual", professional: "Automated", enterprise: "Custom Rules" },
    { category: "property", feature: "Maintenance Tracking", starter: "Basic", professional: "Advanced", enterprise: "Full CMMS" },
    { category: "property", feature: "Inventory Management", starter: false, professional: true, enterprise: "Advanced" },
    { category: "property", feature: "Housekeeping Management", starter: "Basic", professional: "Advanced", enterprise: "Full Scheduling" },
    { category: "property", feature: "Inspection Checklists", starter: "Basic", professional: "Advanced", enterprise: "Custom Forms" },

    // CHANNEL MANAGEMENT
    { category: "channel", feature: "Channel Connections", starter: "3 channels", professional: "Unlimited", enterprise: "Unlimited" },
    { category: "channel", feature: "Real-time Sync", starter: "5 min delay", professional: "Instant", enterprise: "Instant" },
    { category: "channel", feature: "Channel Commission Tracking", starter: false, professional: true, enterprise: true },
    { category: "channel", feature: "Channel Performance Analytics", starter: "Basic", professional: "Advanced", enterprise: "Custom" },
    { category: "channel", feature: "Direct Booking Website", starter: "Basic", professional: "Advanced", enterprise: "Custom Domain" },
    { category: "channel", feature: "Booking Engine", starter: "Basic", professional: "Advanced", enterprise: "Custom" },
    { category: "channel", feature: "Promo Code Management", starter: false, professional: true, enterprise: true },
    { category: "channel", feature: "Package Creation", starter: false, professional: true, enterprise: true },
    { category: "channel", feature: "Rate Plan Management", starter: "2 plans", professional: "Unlimited", enterprise: "Unlimited" },
    { category: "channel", feature: "Stop Sell Automation", starter: "Manual", professional: "Automated", enterprise: "AI-Powered" },
    { category: "channel", feature: "Minimum Stay Rules", starter: "Basic", professional: "Advanced", enterprise: "Dynamic" },
    { category: "channel", feature: "Advance Booking Limits", starter: true, professional: true, enterprise: true },

    // AUTOMATION & AI
    { category: "automation", feature: "AI Dynamic Pricing", starter: false, professional: true, enterprise: "Custom Models" },
    { category: "automation", feature: "Pricing Rules Engine", starter: "Basic", professional: "Advanced", enterprise: "Unlimited Rules" },
    { category: "automation", feature: "Competitor Price Monitoring", starter: false, professional: "10 competitors", enterprise: "Unlimited" },
    { category: "automation", feature: "Demand Forecasting", starter: false, professional: "30 days", enterprise: "365 days" },
    { category: "automation", feature: "Automated Messaging", starter: "50/month", professional: "Unlimited", enterprise: "Unlimited" },
    { category: "automation", feature: "Message Templates", starter: "5 templates", professional: "Unlimited", enterprise: "Unlimited + AI" },
    { category: "automation", feature: "Smart Triggers", starter: "3 triggers", professional: "Unlimited", enterprise: "Unlimited" },
    { category: "automation", feature: "Workflow Automation", starter: "Basic", professional: "Advanced", enterprise: "Custom Workflows" },
    { category: "automation", feature: "Task Automation", starter: "Basic", professional: "Advanced", enterprise: "Full RPA" },
    { category: "automation", feature: "Review Automation", starter: "Basic", professional: "Advanced", enterprise: "AI-Powered" },
    { category: "automation", feature: "Smart Scheduling", starter: false, professional: true, enterprise: true },
    { category: "automation", feature: "AI Guest Communication", starter: false, professional: true, enterprise: "Custom AI" },

    // ANALYTICS & REPORTING
    { category: "analytics", feature: "Dashboard Analytics", starter: "Basic", professional: "Advanced", enterprise: "Custom" },
    { category: "analytics", feature: "Revenue Reports", starter: "Standard", professional: "Advanced", enterprise: "Custom" },
    { category: "analytics", feature: "Occupancy Reports", starter: "Standard", professional: "Advanced", enterprise: "Predictive" },
    { category: "analytics", feature: "Guest Analytics", starter: "Basic", professional: "Advanced", enterprise: "Full CRM" },
    { category: "analytics", feature: "Channel Performance", starter: "Basic", professional: "Advanced", enterprise: "Custom" },
    { category: "analytics", feature: "Financial Reports", starter: "Basic", professional: "Advanced", enterprise: "Full Accounting" },
    { category: "analytics", feature: "Custom Report Builder", starter: false, professional: true, enterprise: true },
    { category: "analytics", feature: "Scheduled Reports", starter: false, professional: true, enterprise: true },
    { category: "analytics", feature: "Data Export (CSV, Excel)", starter: true, professional: true, enterprise: true },
    { category: "analytics", feature: "API Data Access", starter: false, professional: true, enterprise: true },
    { category: "analytics", feature: "BI Tool Integration", starter: false, professional: "Power BI, Tableau", enterprise: "Custom" },
    { category: "analytics", feature: "Real-time Analytics", starter: false, professional: true, enterprise: true },

    // COMMUNICATION
    { category: "communication", feature: "Unified Inbox", starter: true, professional: true, enterprise: true },
    { category: "communication", feature: "Multi-channel Messaging", starter: "3 channels", professional: "Unlimited", enterprise: "Unlimited" },
    { category: "communication", feature: "Automated Responses", starter: "Basic", professional: "Advanced", enterprise: "AI-Powered" },
    { category: "communication", feature: "Message Translation", starter: "5 languages", professional: "25 languages", enterprise: "All" },
    { category: "communication", feature: "Template Library", starter: "Basic", professional: "Advanced", enterprise: "Custom" },
    { category: "communication", feature: "SMS Messaging", starter: false, professional: true, enterprise: true },
    { category: "communication", feature: "WhatsApp Integration", starter: false, professional: true, enterprise: true },
    { category: "communication", feature: "Guest Portal", starter: "Basic", professional: "Advanced", enterprise: "White-Label" },
    { category: "communication", feature: "Review Management", starter: "Basic", professional: "Advanced", enterprise: "Full Suite" },
    { category: "communication", feature: "Team Chat", starter: false, professional: true, enterprise: true },
    { category: "communication", feature: "Internal Notes", starter: true, professional: true, enterprise: true },
    { category: "communication", feature: "Communication History", starter: "30 days", professional: "2 years", enterprise: "Unlimited" },

    // FINANCIAL TOOLS
    { category: "financial", feature: "Payment Processing", starter: "Basic", professional: "Advanced", enterprise: "Custom" },
    { category: "financial", feature: "Commission Tracking", starter: false, professional: true, enterprise: true },
    { category: "financial", feature: "Expense Tracking", starter: false, professional: true, enterprise: true },
    { category: "financial", feature: "Owner Statements", starter: false, professional: true, enterprise: "Automated" },
    { category: "financial", feature: "Revenue Sharing", starter: false, professional: true, enterprise: "Custom Rules" },
    { category: "financial", feature: "Tax Management", starter: "Basic", professional: "Advanced", enterprise: "Global" },
    { category: "financial", feature: "Multi-currency Support", starter: "5 currencies", professional: "50 currencies", enterprise: "All" },
    { category: "financial", feature: "Invoice Generation", starter: false, professional: true, enterprise: true },
    { category: "financial", feature: "Accounting Integration", starter: false, professional: "QuickBooks, Xero", enterprise: "All + ERP" },
    { category: "financial", feature: "Financial Forecasting", starter: false, professional: true, enterprise: "Advanced" },
    { category: "financial", feature: "Budget Management", starter: false, professional: true, enterprise: true },
    { category: "financial", feature: "Custom Financial Rules", starter: false, professional: "Basic", enterprise: "Advanced" },

    // SECURITY & COMPLIANCE
    { category: "security", feature: "SSL Encryption", starter: true, professional: true, enterprise: true },
    { category: "security", feature: "Two-Factor Authentication", starter: true, professional: true, enterprise: true },
    { category: "security", feature: "Single Sign-On (SSO)", starter: false, professional: true, enterprise: true },
    { category: "security", feature: "Role-Based Access Control", starter: "Basic", professional: "Advanced", enterprise: "Custom" },
    { category: "security", feature: "Audit Logs", starter: "30 days", professional: "1 year", enterprise: "Unlimited" },
    { category: "security", feature: "IP Whitelisting", starter: false, professional: true, enterprise: true },
    { category: "security", feature: "SOC 2 Compliance", starter: false, professional: true, enterprise: true },
    { category: "security", feature: "GDPR Compliance", starter: true, professional: true, enterprise: true },
    { category: "security", feature: "PCI DSS Compliance", starter: true, professional: true, enterprise: "Level 1" },
    { category: "security", feature: "Data Residency", starter: "US Only", professional: "US, EU", enterprise: "Global" },
    { category: "security", feature: "Custom Security Policies", starter: false, professional: false, enterprise: true },
    { category: "security", feature: "Penetration Testing", starter: false, professional: "Annual", enterprise: "Quarterly" },

    // INTEGRATIONS
    { category: "integration", feature: "API Access", starter: "Read-only", professional: "Full", enterprise: "Priority" },
    { category: "integration", feature: "Webhook Support", starter: false, professional: true, enterprise: true },
    { category: "integration", feature: "Zapier Integration", starter: false, professional: true, enterprise: true },
    { category: "integration", feature: "Native PMS Integrations", starter: "3", professional: "50+", enterprise: "All + Custom" },
    { category: "integration", feature: "CRM Integrations", starter: false, professional: "Salesforce, HubSpot", enterprise: "All" },
    { category: "integration", feature: "ERP Integrations", starter: false, professional: "SAP, Oracle", enterprise: "All" },
    { category: "integration", feature: "Accounting Software", starter: false, professional: true, enterprise: true },
    { category: "integration", feature: "Payment Gateways", starter: "2", professional: "10+", enterprise: "All" },
    { category: "integration", feature: "Channel Managers", starter: "3", professional: "All Major", enterprise: "All + Niche" },
    { category: "integration", feature: "Smart Lock Systems", starter: false, professional: "5", enterprise: "All" },
    { category: "integration", feature: "IoT Device Integration", starter: false, professional: "Basic", enterprise: "Full" },
    { category: "integration", feature: "Custom Integration Development", starter: false, professional: false, enterprise: true },

    // SUPPORT & SERVICES
    { category: "support", feature: "Support Channels", starter: "Email", professional: "Email, Chat, Phone", enterprise: "All + Dedicated" },
    { category: "support", feature: "Response Time", starter: "48 hours", professional: "2 hours", enterprise: "15 minutes" },
    { category: "support", feature: "Support Hours", starter: "Business hours", professional: "24/7", enterprise: "24/7 Priority" },
    { category: "support", feature: "Dedicated Account Manager", starter: false, professional: false, enterprise: true },
    { category: "support", feature: "Customer Success Manager", starter: false, professional: true, enterprise: true },
    { category: "support", feature: "Implementation Support", starter: "Self-service", professional: "Guided", enterprise: "White-glove" },
    { category: "support", feature: "Training Sessions", starter: "Videos", professional: "Live webinars", enterprise: "On-site" },
    { category: "support", feature: "Custom Training Materials", starter: false, professional: false, enterprise: true },
    { category: "support", feature: "Quarterly Business Reviews", starter: false, professional: false, enterprise: true },
    { category: "support", feature: "SLA Guarantee", starter: "99%", professional: "99.9%", enterprise: "99.99%" },
    { category: "support", feature: "Priority Feature Requests", starter: false, professional: true, enterprise: true },
    { category: "support", feature: "Early Access to Features", starter: false, professional: true, enterprise: true },
  ]

  const filteredFeatures = features.filter(f => {
    const matchesSearch = f.feature.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesTab = activeTab === "all" || f.category === activeTab
    return matchesSearch && matchesTab
  })

  const visibleFeatures = showAllFeatures ? filteredFeatures : filteredFeatures.slice(0, 24)

  return (
    <div className="min-h-screen  text-[var(--text-primary)] font-sans overflow-x-hidden selection:bg-[var(--color-primary-200)]">
      <Head>
        <title>Plan Comparison | See All Features Side by Side | StayPilot</title>
        <meta name="description" content="Complete feature comparison of StayPilot plans. Compare Starter (Free), Professional ($49/user), and Enterprise (Custom) side by side. 100+ features detailed." />
        <meta name="keywords" content="staypilot pricing comparison, property management software features, vacation rental software comparison, hotel management features" />
      </Head>

      {/* 🎯 HERO SECTION */}
      <section className="relative py-20 bg-gradient-to-br from-[var(--bg-primary)] via-blue-50/50 to-[var(--bg-secondary)] border-b border-[var(--border-light)]">
        <div className="max-w-7xl mx-auto px-[var(--space-4)] sm:px-[var(--space-6)] lg:px-[var(--space-8)]">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div variants={fadeInUp} className="mb-6">
              <Badge variant="primary"  glow className="text-sm sm:text-lg">
                <ScaleIcon className="w-4 h-4" />
                Complete Feature Comparison
              </Badge>
            </motion.div>

            <motion.h1 variants={fadeInUp} className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 text-[var(--text-primary)]">
              See All Features <GradientText variant="primary">Side by Side</GradientText>
            </motion.h1>

            <motion.p variants={fadeInUp} className="text-xl text-[var(--text-secondary)] mb-8 max-w-3xl mx-auto">
              Every feature, every plan, every detail. Compare our Starter (Free), Professional ($49/user), and Enterprise plans to find your perfect fit.
            </motion.p>

            {/* Quick Stats */}
            <motion.div variants={fadeInUp} className="flex flex-wrap items-center justify-center gap-8 text-sm text-[var(--text-tertiary)] mb-8">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-[var(--color-success-600)]" />
                <span>100+ Features Compared</span>
              </div>
              <div className="flex items-center gap-2">
                <RefreshCw className="w-5 h-5 text-[var(--color-success-600)]" />
                <span>Updated Weekly</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-[var(--color-success-600)]" />
                <span>No Hidden Fees</span>
              </div>
            </motion.div>

            {/* Pricing Toggle */}
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-[var(--space-4)] p-1.5 bg-[var(--bg-secondary)] rounded-[var(--radius-full)] border border-[var(--border-light)]">
              <button
                onClick={() => setIsYearly(false)}
                className={`px-[var(--space-6)] py-[var(--space-2)] rounded-[var(--radius-full)] font-semibold transition-all duration-[var(--duration-fast)] ${
                  !isYearly 
                    ? 'bg-[var(--bg-primary)] text-[var(--color-primary-600)] shadow-sm' 
                    : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setIsYearly(true)}
                className={`px-[var(--space-6)] py-[var(--space-2)] rounded-[var(--radius-full)] font-semibold transition-all duration-[var(--duration-fast)] flex items-center gap-[var(--space-2)] ${
                  isYearly 
                    ? 'bg-[var(--bg-primary)] text-[var(--color-primary-600)] shadow-sm' 
                    : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                }`}
              >
                Yearly
                <span className="text-xs bg-[var(--color-success-100)] text-[var(--color-success-700)] px-[var(--space-2)] py-0.5 rounded-[var(--radius-full)]">Save 20%</span>
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 💰 PRICING CARDS STRIP */}
      <section className="sticky top-0 z-40  backdrop-blur-xl border-b border-[var(--border-light)] shadow-sm">
        <div className="max-w-7xl mx-auto px-[var(--space-4)] sm:px-[var(--space-6)] lg:px-[var(--space-8)]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-4">
             {/* Spacer for feature column */}
            
            {/* Starter */}
            <div className="text-center p-4 rounded-xl bg-[var(--color-primary-50)] border border-[var(--border-light)]">
              <div className="font-bold text-lg text-[var(--text-primary)] mb-1">Starter</div>
              <div className="text-3xl font-extrabold text-[var(--color-success-600)] mb-1">Free</div>
              <div className="text-sm text-[var(--text-tertiary)]">Forever</div>
              <button className="mt-3 w-full py-2 rounded-lg bg-[var(--bg-tertiary)] text-[var(--text-secondary)] font-bold hover:bg-[var(--border-light)] transition-colors text-sm">
                Current Plan
              </button>
            </div>

            {/* Professional */}
            <div className="text-center p-4 rounded-xl bg-[var(--color-primary-50)] border-2 border-[var(--color-primary-200)] relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <Badge variant="primary" size="sm">Most Popular</Badge>
              </div>
              <div className="font-bold text-lg text-[var(--text-primary)] mb-1">Professional</div>
              <div className="text-3xl font-extrabold text-[var(--color-primary-600)] mb-1">
                ${isYearly ? pricing.professional.yearly : pricing.professional.monthly}
              </div>
              <div className="text-sm text-[var(--text-tertiary)]">/user/month</div>
              <button className="mt-3 w-full py-2 rounded-lg bg-[var(--color-primary-600)] text-white font-bold hover:bg-[var(--color-primary-700)] transition-colors text-sm shadow-lg">
                Start Trial
              </button>
            </div>

            {/* Enterprise */}
            <div className="text-center p-4 rounded-xl bg-slate-900 text-white border border-slate-700">
              <div className="font-bold text-lg mb-1">Enterprise</div>
              <div className="text-3xl font-extrabold text-blue-400 mb-1">Custom</div>
              <div className="text-sm text-slate-400">Tailored pricing</div>
              <button className="mt-3 w-full py-2 rounded-lg bg-white text-slate-900 font-bold hover:bg-blue-50 transition-colors text-sm">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 🔍 SEARCH & FILTER */}
      <section className="py-6  border-b border-[var(--border-light)]">
        <div className="max-w-7xl mx-auto px-[var(--space-4)] sm:px-[var(--space-6)] lg:px-[var(--space-8)]">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative w-full lg:w-96">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[var(--text-tertiary)]" />
              <input 
                type="text" 
                placeholder="Search features..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-xl bg-white border border-[var(--border-light)] text-[var(--text-primary)] placeholder:text-[var(--text-tertiary)] outline-none focus:border-[var(--color-primary-400)] focus:ring-2 focus:ring-[var(--color-primary-100)]"
              />
            </div>

            {/* Category Tabs */}
            <div className="flex flex-wrap gap-2 justify-center">
              <button 
                onClick={() => setActiveTab("all")}
                className={`px-4 py-2 rounded-full text-sm font-bold transition-all ${
                  activeTab === "all" 
                    ? 'bg-[var(--color-primary-600)] text-white' 
                    : 'bg-white text-[var(--text-secondary)] hover:bg-[var(--bg-tertiary)]'
                }`}
              >
                All Features
              </button>
              {categories.map(cat => (
                <button 
                  key={cat.id}
                  onClick={() => setActiveTab(cat.id)}
                  className={`px-4 py-2 rounded-full text-sm font-bold transition-all flex items-center gap-2 ${
                    activeTab === cat.id 
                      ? 'bg-[var(--color-primary-600)] text-white' 
                      : 'bg-[var(--color-primary-100)] text-[var(--text-secondary)] hover:bg-[var(--bg-tertiary)]'
                  }`}
                >
                  <cat.icon className="w-4 h-4" />
                  {cat.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 📊 COMPARISON TABLE */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-[var(--space-4)] sm:px-[var(--space-6)] lg:px-[var(--space-8)]">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {/* Table Header */}
            <div className="grid grid-cols-[2fr,1fr,1fr,1fr] gap-4 p-4 bg-[var(--bg-secondary)] rounded-t-xl border border-[var(--border-light)] border-b-0">
              <div className="font-bold text-[var(--text-tertiary)] uppercase tracking-wider text-sm flex items-center gap-2">
                <Filter className="w-4 h-4" />
                Feature Category
              </div>
              <div className="text-center font-bold text-[var(--color-success-600)]">Starter</div>
              <div className="text-center font-bold text-[var(--color-primary-600)] bg-[var(--color-primary-50)] -my-4 py-4 border-x border-[var(--color-primary-100)]">Professional</div>
              <div className="text-center font-bold text-slate-700">Enterprise</div>
            </div>

            {/* Features */}
            <div className="bg-white rounded-b-xl border border-[var(--border-light)] shadow-lg overflow-hidden">
              {categories.map((category, catIndex) => {
                const categoryFeatures = visibleFeatures.filter(f => f.category === category.id)
                if (categoryFeatures.length === 0) return null

                return (
                  <div key={category.id}>
                    {/* Category Header */}
                    <div className="col-span-4 bg-gradient-to-r from-[var(--color-primary-50)] to-[var(--bg-secondary)] p-4 border-b border-[var(--border-light)]">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-[var(--color-primary-100)] flex items-center justify-center">
                          <category.icon className="w-5 h-5 text-[var(--color-primary-600)]" />
                        </div>
                        <div>
                          <h3 className="font-bold text-[var(--text-primary)] text-lg">{category.label}</h3>
                          <p className="text-sm text-[var(--text-secondary)]">
                            {categoryFeatures.length} features in this category
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Feature Rows */}
                    {categoryFeatures.map((feature, index) => (
                      <ComparisonRow 
                        key={`${category.id}-${index}`}
                        feature={feature.feature}
                        starter={<ValueIndicator value={feature.starter} type={typeof feature.starter === 'boolean' ? 'check' : 'text'} />}
                        professional={<ValueIndicator value={feature.professional} type={typeof feature.professional === 'boolean' ? 'check' : 'text'} />}
                        enterprise={<ValueIndicator value={feature.enterprise} type={typeof feature.enterprise === 'boolean' ? 'check' : 'text'} />}
                        tooltip={feature.tooltip}
                        highlight={index % 2 === 0}
                      />
                    ))}
                  </div>
                )
              })}

              {visibleFeatures.length === 0 && (
                <div className="p-12 text-center text-[var(--text-secondary)]">
                  <Search className="w-12 h-12 mx-auto mb-4 text-[var(--text-tertiary)]" />
                  <p className="text-lg font-medium">No features found matching your search</p>
                  <p className="text-sm">Try adjusting your search terms or category filter</p>
                </div>
              )}
            </div>

            {/* Show More Button */}
            {!showAllFeatures && filteredFeatures.length > 24 && (
              <div className="mt-8 text-center">
                <button 
                  onClick={() => setShowAllFeatures(true)}
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[var(--bg-secondary)] text-[var(--text-primary)] font-bold hover:bg-[var(--border-light)] transition-colors border border-[var(--border-light)]"
                >
                  <Plus className="w-5 h-5" />
                  Show All {filteredFeatures.length} Features
                </button>
              </div>
            )}
          </motion.div>
        </div>
      </section>

      {/* 📋 QUICK COMPARISON CARDS */}
      <section className="py-20 ">
        <div className="max-w-7xl mx-auto px-[var(--space-4)] sm:px-[var(--space-6)] lg:px-[var(--space-8)]">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-12"
          >
            <motion.h2 variants={fadeInUp} className="text-3xl font-bold mb-4 text-[var(--text-primary)]">
              At a <GradientText>Glance</GradientText>
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-[var(--text-secondary)]">
              Quick overview of what each plan offers
            </motion.p>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-12 lg:gap-8"
          >
            {/* Starter Card */}
            <motion.div variants={fadeInUp} className="bg-white rounded-2xl p-8 shadow-lg border border-[var(--border-light)]">
              <div className="text-center mb-6">
                <div className="w-16 h-16 rounded-2xl bg-[var(--color-success-100)] flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-[var(--color-success-600)]" />
                </div>
                <h3 className="text-2xl font-bold text-[var(--text-primary)]">Starter</h3>
                <div className="text-4xl font-extrabold text-[var(--color-success-600)] my-2">Free</div>
                <p className="text-[var(--text-secondary)]">Perfect for getting started</p>
              </div>
              
              <ul className="space-y-3 mb-8">
                {[
                  "3 Properties",
                  "10 Rooms",
                  "2 Team Members",
                  "Basic Channel Sync",
                  "Email Support",
                  "5GB Storage"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-[var(--text-primary)]">
                    <Check className="w-5 h-5 text-[var(--color-success-600)] flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>

              <button className="w-full py-3 rounded-xl bg-[var(--bg-tertiary)] text-[var(--text-secondary)] font-bold hover:bg-[var(--border-light)] transition-colors">
                Current Plan
              </button>
            </motion.div>

            {/* Professional Card */}
            <motion.div variants={fadeInUp} className="bg-white rounded-2xl p-8 shadow-xl border-2 border-[var(--color-primary-200)] relative transform scale-105">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <Badge variant="primary" size="lg" glow>Most Popular</Badge>
              </div>
              
              <div className="text-center mb-6 pt-4">
                <div className="w-16 h-16 rounded-2xl bg-[var(--color-primary-100)] flex items-center justify-center mx-auto mb-4">
                  <Crown className="w-8 h-8 text-[var(--color-primary-600)]" />
                </div>
                <h3 className="text-2xl font-bold text-[var(--text-primary)]">Professional</h3>
                <div className="text-4xl font-extrabold text-[var(--color-primary-600)] my-2">
                  ${isYearly ? '39' : '49'}
                </div>
                <p className="text-[var(--text-secondary)]">per user/month</p>
              </div>
              
              <ul className="space-y-3 mb-8">
                {[
                  "Unlimited Properties",
                  "Unlimited Rooms",
                  "Unlimited Team Members",
                  "AI Dynamic Pricing",
                  "Priority Support (2h)",
                  "Advanced Analytics"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-[var(--text-primary)]">
                    <Check className="w-5 h-5 text-[var(--color-primary-600)] flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>

              <button className="w-full py-3 rounded-xl bg-[var(--color-primary-600)] text-white font-bold hover:bg-[var(--color-primary-700)] transition-colors shadow-lg">
                Start 14-Day Trial
              </button>
            </motion.div>

            {/* Enterprise Card */}
            <motion.div variants={fadeInUp} className="bg-slate-900 rounded-2xl p-8 shadow-xl border border-slate-700 text-white">
              <div className="text-center mb-6">
                <div className="w-16 h-16 rounded-2xl bg-blue-500/20 flex items-center justify-center mx-auto mb-4">
                  <Building2 className="w-8 h-8 text-blue-400" />
                </div>
                <h3 className="text-2xl font-bold">Enterprise</h3>
                <div className="text-4xl font-extrabold text-blue-400 my-2">Custom</div>
                <p className="text-slate-400">For large organizations</p>
              </div>
              
              <ul className="space-y-3 mb-8">
                {[
                  "Everything in Professional",
                  "Custom AI Models",
                  "White-Label Solution",
                  "Dedicated Account Manager",
                  "99.99% SLA",
                  "Custom Integrations"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-white">
                    <Check className="w-5 h-5 text-blue-400 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>

              <button className="w-full py-3 rounded-xl bg-white text-slate-900 font-bold hover:bg-blue-50 transition-colors">
                Contact Sales
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ❓ FAQ SECTION */}
      <section className="py-20 ">
        <div className="max-w-3xl mx-auto px-[var(--space-4)] sm:px-[var(--space-6)] lg:px-[var(--space-8)]">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-12"
          >
            <motion.h2 variants={fadeInUp} className="text-3xl font-bold mb-4 text-[var(--text-primary)]">
              Frequently Asked <GradientText>Questions</GradientText>
            </motion.h2>
          </motion.div>

          <motion.div variants={staggerContainer} className="space-y-4">
            {[
              {
                q: "Can I switch plans at any time?",
                a: "Yes, you can upgrade or downgrade your plan at any time. When upgrading, you'll get immediate access to new features. When downgrading, changes take effect at your next billing cycle."
              },
              {
                q: "Is there a free trial for Professional?",
                a: "Yes! We offer a 14-day free trial of the Professional plan with full access to all features. No credit card required to start."
              },
              {
                q: "What happens to my data if I downgrade?",
                a: "Your data is always preserved. If you exceed the limits of your new plan, you'll have 30 days to export or delete excess data before it becomes read-only."
              },
              {
                q: "Do you offer discounts for nonprofits or education?",
                a: "Yes, we offer special pricing for verified nonprofit organizations and educational institutions. Contact our sales team for details."
              },
              {
                q: "How does user-based pricing work?",
                a: "You only pay for users who actively use the platform. We don't charge for read-only users or guests. Volume discounts are available for teams of 10+."
              }
            ].map((faq, i) => (
              <motion.div key={i} variants={fadeInUp} className="bg-white rounded-xl p-6 shadow-md border border-[var(--border-light)]">
                <h4 className="font-bold text-[var(--text-primary)] mb-2 flex items-center gap-2">
                  <HelpCircle className="w-5 h-5 text-[var(--color-primary-600)]" />
                  {faq.q}
                </h4>
                <p className="text-[var(--text-secondary)]">{faq.a}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 🚀 CTA SECTION */}
      <section className="py-20 bg-gradient-to-br from-[var(--color-primary-600)] to-[var(--color-secondary-600)] text-white">
        <div className="max-w-4xl mx-auto px-[var(--space-4)] sm:px-[var(--space-6)] lg:px-[var(--space-8)] text-center">
          <h2 className="text-4xl font-bold mb-6">Still Have Questions?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Our team is ready to help you choose the perfect plan for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-white text-[var(--color-primary-600)] rounded-full font-bold hover:bg-blue-50 transition-colors flex items-center justify-center gap-2">
              <Phone className="w-5 h-5" />
              Schedule a Call
            </button>
            <button className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-full font-bold hover:bg-white/10 transition-colors flex items-center justify-center gap-2">
              <Mail className="w-5 h-5" />
              Email Sales
            </button>
          </div>
        </div>
      </section>

     
    </div>
  )
}

// Helper component for the scale icon
function ScaleIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" />
      <path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" />
      <path d="M7 21h10" />
      <path d="M12 3v18" />
      <path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2" />
    </svg>
  )
}