import { Pendidikan, Pengalaman, Keahlian } from '../models/PendidikanModel.js';

export const getPengalaman = async (req, res) => {
  try {
    const response = await Pengalaman.findAll();
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const savePengalaman = async (req, res) => {
  try {
    await Pengalaman.create({ data: req.body.data });
    res.status(201).json({ message: 'Success create data' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updatePengalaman = async (req, res) => {
  try {
    await Pengalaman.update(
      { data: req.body.data },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    res.status(200).json({ message: 'Success Updated' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deletePengalaman = async (req, res) => {
  try {
    await Pengalaman.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ message: 'Success Deleted' });
  } catch (error) {}
};

export const getPendidikan = async (req, res) => {
  try {
    const response = await Pendidikan.findAll();
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const savePendidikan = async (req, res) => {
  try {
    await Pendidikan.create({ data: req.body.data });
    res.status(201).json({ message: 'Success create data' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updatePendidikan = async (req, res) => {
  try {
    await Pendidikan.update(
      { data: req.body.data },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    res.status(200).json({ message: 'Success Updated' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deletePendidikan = async (req, res) => {
  try {
    await Pendidikan.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ message: 'Success Deleted' });
  } catch (error) {}
};

export const getKeahlian = async (req, res) => {
  try {
    const response = await Keahlian.findAll();
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const saveKeahlian = async (req, res) => {
  try {
    await Keahlian.create({
      data: req.body.data,
      description: req.body.description,
      value: req.body.value,
    });
    res.status(201).json({ message: 'Success create data' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateKeahlian = async (req, res) => {
  try {
    await Keahlian.update(
      {
        data: req.body.data,
        description: req.body.description,
        value: req.body.value,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    res.status(200).json({ message: 'Success Updated' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteKeahlian = async (req, res) => {
  try {
    await Keahlian.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ message: 'Success Deleted' });
  } catch (error) {}
};
