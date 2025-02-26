import './bootstrap';
import Alpine from 'alpinejs';
import 'tw-elements';

// Initialization for ES Users
import {
    Modal,
    Ripple,
    initTWE,
} from "tw-elements";

initTWE({ Modal, Ripple });

window.Alpine = Alpine;

Alpine.start();
