'use client'

import React, {useState} from 'react';
import {Button} from "@/components/ui/button";
import {Alert, AlertDescription, AlertTitle} from "@/components/ui/alert";
import {AlertCircle} from "lucide-react";
import Script from 'next/script';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import {
    Bird,
    Book,
    Bot,
    Code2,
    CornerDownLeft,
    LifeBuoy,
    Mic,
    Paperclip,
    Rabbit,
    Settings,
    Settings2,
    Share,
    SquareTerminal,
    SquareUser,
    Triangle,
    Turtle,
} from "lucide-react"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import { Bold, Italic, Underline } from "lucide-react"
import Releases from './release.json';

const radars: ManiFestInfo[] = Releases.values.map(radar => ({ name: radar.name, values: radar.values }));

export default function InstallButton() {
    const [versions, updateVersions] = useState<ManiFestInfo[]>([]);
    const [models, updateModels] = useState<ManiFestInfo[]>([]);
    const [version, updateVersion] = useState<string>("");
    const [radar, updateRadar] = useState<string>("");
    const [model, updateModel] = useState<string>("");
    const [manifest, updateManifest] = useState<string>("");

    return <div className="md:w-1/4 w-full p-3">
        <Script
            type="module"
            // src="https://unpkg.com/esp-web-tools@10/dist/web/install-button.js?module"
            src="/esp-web-tools/install-button.js?module"
        ></Script>
        <div className="mb-6">
            <div>1. Welcome to the OwRadar web installer!</div>
            <div>2. Choose your radar module {radar} and board model {model}.</div>
            <div>3. Plug in your ESP to a USB port. We will install OwRadar {version} to it.</div>
            <div>4. Hit &quot;Install&quot; and select the correct COM port.</div>
            <div>5. Get OwRadar installed and connected in less than 3 minutes!</div>
        </div>
        <div className="mb-6">
            <ToggleGroup
                variant="outline"
                size="lg"
                type="single"
                value={radar}
                onValueChange={(value) => {
                    updateRadar(value);
                    updateModels(radars.find(radar => radar.name === value)?.values || []);
                    updateModel("");
                    updateVersions([]);
                    updateVersion("");
                    updateManifest("");
                }}>
                {
                    radars.map((radar, index) => {
                        return <ToggleGroupItem
                            value={radar.name}
                            aria-label={radar.name}
                            key={radar.name}
                        >
                            {radar.name}
                        </ToggleGroupItem>
                    })
                }
            </ToggleGroup>
        </div>
        <div className="mb-6">
            <ToggleGroup
                variant="outline"
                size="lg"
                type="single"
                value={model}
                onValueChange={(value) => {
                    updateModel(value);
                    updateVersions(models.find(model => model.name === value)?.values || []);
                    updateVersion("");
                    updateManifest("");
                }}
            >
                {
                    models.map((model, index) => {
                        return <ToggleGroupItem
                            value={model.name}
                            aria-label={model.name}
                            key={model.name}
                        >
                            {model.name}
                        </ToggleGroupItem>
                    })
                }
            </ToggleGroup>
        </div>
        <div className="mb-6">
            <Select
                disabled={versions.length === 0}
                value={version}
                onValueChange={(value) => {
                    updateVersion(value);
                    const file = versions.find(version => version.name === value)?.values[0] as string;
                    updateManifest(file);
                }}
            >
                <SelectTrigger
                    id="version"
                    className="items-start [&_[data-description]]:hidden"
                >
                    <SelectValue placeholder="Select a version" />
                </SelectTrigger>
                <SelectContent>
                    {
                        versions.map((version, index) => {
                            return <SelectItem
                                value={version.name}
                                key={version.name}
                            >{version.name} </SelectItem>
                        })
                    }
                </SelectContent>
            </Select>
        </div>
        <div>
            <esp-web-install-button manifest={manifest}>
                <Button disabled={version === ""} slot="activate" className="w-full">Install</Button>
            </esp-web-install-button>
        </div>
    </div>

}